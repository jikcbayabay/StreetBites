// recommendationService.js - Enhanced Version
import { collection, query, where, getDocs, orderBy, limit, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export class RecommendationEngine {
  constructor(userId, userContext = {}) {
    this.userId = userId;
    this.userContext = userContext; // { location, time, weather, budget }
    this.cache = {
      vendors: null,
      vendorsTimestamp: null,
      userProfile: null,
      CACHE_DURATION: 5 * 60 * 1000 // 5 minutes
    };
  }

  /**
   * Main method to get personalized recommendations with context awareness
   */
  async getRecommendations(maxResults = 10, options = {}) {
    const { 
      includeDiversity = true, 
      explorationRate = 0.2, // 20% exploratory recommendations
      filterClosed = true 
    } = options;

    try {
      // 1. Get user's activity with orders (stronger signal)
      const [userFavorites, userReviews, userOrders] = await Promise.all([
        this.getUserFavorites(),
        this.getUserReviews(),
        this.getUserOrders()
      ]);

      // 2. Get all vendors (with caching)
      const allVendors = await this.getAllVendors();

      // 3. Filter vendors
      const interactedVendorIds = new Set([
        ...userFavorites.map(f => f.vendorId),
        ...userReviews.map(r => r.vendorId),
        ...userOrders.map(o => o.vendorId)
      ]);

      let candidateVendors = allVendors.filter(v => {
        // Don't recommend already interacted vendors
        if (interactedVendorIds.has(v.id)) return false;
        
        // Filter closed vendors if requested
        if (filterClosed && v.isClosed) return false;
        
        return true;
      });

      // Handle cold start
      const isNewUser = userFavorites.length === 0 && 
                        userReviews.length === 0 && 
                        userOrders.length === 0;

      // 4. Build user profile for better personalization
      const userProfile = this.buildUserProfile(userFavorites, userReviews, userOrders, allVendors);

      // 5. Calculate scores for each vendor
      const scoredVendors = await this.scoreVendors(
        candidateVendors,
        userProfile,
        allVendors,
        isNewUser
      );

      // 6. Sort by score
      let sortedVendors = scoredVendors.sort((a, b) => b.score - a.score);

      // 7. Apply diversity if requested
      if (includeDiversity && !isNewUser) {
        sortedVendors = this.applyDiversityFilter(sortedVendors, allVendors, maxResults);
      }

      // 8. For new users, shuffle top results
      if (isNewUser) {
        const topCandidates = sortedVendors.slice(0, maxResults * 2);
        sortedVendors = this.shuffleArray(topCandidates);
      }

      // 9. Add exploration vs exploitation
      if (explorationRate > 0 && !isNewUser) {
        sortedVendors = this.addExploratoryRecommendations(
          sortedVendors, 
          candidateVendors, 
          maxResults, 
          explorationRate
        );
      }

      // 10. Return top N with vendor details
      return sortedVendors
        .slice(0, maxResults)
        .map(sv => {
          const vendor = allVendors.find(v => v.id === sv.vendorId);
          return {
            ...vendor,
            recommendationScore: sv.score,
            recommendationReasons: sv.reasons
          };
        });
    } catch (error) {
      console.error('Error generating recommendations:', error);
      return [];
    }
  }

  /**
   * Build comprehensive user profile
   */
  buildUserProfile(favorites, reviews, orders, allVendors) {
    const vendorMap = new Map(allVendors.map(v => [v.id, v]));
    const profile = {
      categories: new Map(),
      priceRanges: new Map(),
      cuisines: new Map(),
      avgOrderValue: 0,
      orderFrequency: orders.length,
      favoriteTime: this.extractFavoriteTime(orders),
      recentInteractions: []
    };

    // Weight orders highest (actual purchase), then favorites, then reviews
    const interactions = [
      ...orders.map(o => ({ ...o, weight: 3, type: 'order' })),
      ...favorites.map(f => ({ ...f, weight: 2, type: 'favorite' })),
      ...reviews.filter(r => r.rating >= 4).map(r => ({ ...r, weight: 1, type: 'review' }))
    ];

    // Apply recency weighting and build profile
    interactions.forEach(interaction => {
      const vendor = vendorMap.get(interaction.vendorId);
      if (!vendor) return;

      const recencyWeight = this.getRecencyWeight(interaction.timestamp);
      const finalWeight = interaction.weight * recencyWeight;

      // Track categories
      profile.categories.set(
        vendor.category,
        (profile.categories.get(vendor.category) || 0) + finalWeight
      );

      // Track price ranges
      profile.priceRanges.set(
        vendor.priceRange,
        (profile.priceRanges.get(vendor.priceRange) || 0) + finalWeight
      );

      // Track cuisines
      if (vendor.cuisine) {
        profile.cuisines.set(
          vendor.cuisine,
          (profile.cuisines.get(vendor.cuisine) || 0) + finalWeight
        );
      }

      // Recent interactions (last 30 days)
      const daysSince = (Date.now() - interaction.timestamp) / (1000 * 60 * 60 * 24);
      if (daysSince < 30) {
        profile.recentInteractions.push({
          vendorId: vendor.id,
          category: vendor.category,
          type: interaction.type
        });
      }
    });

    // Calculate average order value
    if (orders.length > 0) {
      profile.avgOrderValue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0) / orders.length;
    }

    return profile;
  }

  /**
   * Extract user's preferred ordering time
   */
  extractFavoriteTime(orders) {
    if (orders.length === 0) return null;
    
    const hourCounts = new Array(24).fill(0);
    orders.forEach(order => {
      if (order.timestamp) {
        const hour = new Date(order.timestamp).getHours();
        hourCounts[hour]++;
      }
    });

    const maxHour = hourCounts.indexOf(Math.max(...hourCounts));
    return maxHour;
  }

  /**
   * Get recency weight for time-based decay
   */
  getRecencyWeight(timestamp) {
    if (!timestamp) return 0.5;
    
    const daysSince = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
    
    if (daysSince < 7) return 1.5;      // Last week: 50% boost
    if (daysSince < 30) return 1.2;     // Last month: 20% boost
    if (daysSince < 90) return 1.0;     // Last 3 months: normal
    if (daysSince < 180) return 0.7;    // Last 6 months: 30% penalty
    return 0.5;                          // Older: 50% penalty
  }

  /**
   * Enhanced scoring with ML-ready features
   */
  async scoreVendors(candidates, userProfile, allVendors, isNewUser) {
    const scores = [];
    const similarUsers = isNewUser ? [] : await this.findSimilarUsers(userProfile);

    for (const vendor of candidates) {
      let score = 0;
      const reasons = [];
      const features = {}; // Store features for future ML training

      // 1. Collaborative Filtering (35% weight)
      if (!isNewUser && similarUsers.length > 0) {
        const collaborativeScore = await this.getCollaborativeScore(vendor.id, similarUsers);
        if (collaborativeScore > 0) {
          const weightedScore = collaborativeScore * 0.35;
          score += weightedScore;
          features.collaborative = collaborativeScore;
          if (collaborativeScore > 50) {
            reasons.push('Popular among users with similar taste');
          }
        }
      }

      // 2. Content-Based Filtering (30% weight)
      const categoryWeight = userProfile.categories.get(vendor.category) || 0;
      if (categoryWeight > 0) {
        const categoryScore = Math.min(categoryWeight * 10, 30);
        score += categoryScore;
        features.categoryMatch = categoryWeight;
        reasons.push(`You love ${vendor.category}`);
      }

      const priceWeight = userProfile.priceRanges.get(vendor.priceRange) || 0;
      if (priceWeight > 0) {
        const priceScore = Math.min(priceWeight * 5, 15);
        score += priceScore;
        features.priceMatch = priceWeight;
      }

      // Cuisine matching
      if (vendor.cuisine) {
        const cuisineWeight = userProfile.cuisines.get(vendor.cuisine) || 0;
        if (cuisineWeight > 0) {
          score += Math.min(cuisineWeight * 5, 10);
          features.cuisineMatch = cuisineWeight;
        }
      }

      // 3. Popularity & Quality (20% weight)
      const popularityScore = this.getPopularityScore(vendor);
      score += popularityScore * 0.2;
      features.popularity = popularityScore;
      
      if (vendor.rating >= 4.7) {
        reasons.push('Exceptional ratings (4.7+★)');
      } else if (vendor.rating >= 4.5) {
        reasons.push('Highly rated');
      }

      // 4. Location Score (10% weight)
      const locationScore = this.getLocationScore(vendor.distance);
      score += locationScore * 0.1;
      features.location = locationScore;
      
      if (vendor.distance < 1) {
        reasons.push('Very close by');
      } else if (vendor.distance < 3) {
        reasons.push('Nearby');
      }

      // 5. Context-Aware Bonuses (5% total)
      const contextBonus = this.getContextualBonus(vendor, userProfile);
      score += contextBonus;
      features.contextual = contextBonus;

      // Add context reasons
      if (contextBonus > 5) {
        if (this.userContext.weather === 'rainy' && vendor.category === 'Comfort Food') {
          reasons.push('Perfect for rainy weather');
        }
        if (this.userContext.time === 'breakfast' && vendor.hasBreakfast) {
          reasons.push('Great breakfast options');
        }
      }

      // 6. Freshness Boost - New vendors get a chance
      if (vendor.isNew) {
        score += 5;
        reasons.push('New vendor - give them a try!');
      }

      // 7. Trending Boost
      if (vendor.isTrending) {
        score += 8;
        reasons.push('Trending now');
      }

      // 8. Add controlled randomization
      const randomBoost = isNewUser ? Math.random() * 10 : Math.random() * 3;
      score += randomBoost;

      scores.push({
        vendorId: vendor.id,
        score,
        reasons: reasons.slice(0, 3), // Max 3 reasons
        features // Store for analytics/ML
      });
    }

    return scores;
  }

  /**
   * Contextual bonuses based on time, weather, budget
   */
  getContextualBonus(vendor, userProfile) {
    let bonus = 0;

    // Time of day matching
    if (this.userContext.time) {
      const currentHour = new Date().getHours();
      if (currentHour >= 6 && currentHour < 11 && vendor.hasBreakfast) {
        bonus += 5;
      } else if (currentHour >= 11 && currentHour < 15 && vendor.hasLunch) {
        bonus += 5;
      } else if (currentHour >= 17 && currentHour < 23 && vendor.hasDinner) {
        bonus += 5;
      }

      // Match user's favorite ordering time
      if (userProfile.favoriteTime !== null) {
        const timeDiff = Math.abs(currentHour - userProfile.favoriteTime);
        if (timeDiff < 2) bonus += 3;
      }
    }

    // Weather-based recommendations
    if (this.userContext.weather) {
      if (this.userContext.weather === 'rainy' && 
          ['Comfort Food', 'Soup', 'Hot Drinks'].includes(vendor.category)) {
        bonus += 5;
      }
      if (this.userContext.weather === 'hot' && 
          ['Ice Cream', 'Smoothies', 'Cold Drinks'].includes(vendor.category)) {
        bonus += 5;
      }
    }

    // Budget matching
    if (this.userContext.budget && vendor.avgPrice) {
      const priceDiff = Math.abs(vendor.avgPrice - this.userContext.budget);
      if (priceDiff < this.userContext.budget * 0.2) {
        bonus += 5; // Within 20% of budget
      }
    }

    // Day of week patterns
    const dayOfWeek = new Date().getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    if (isWeekend && vendor.popularOnWeekends) {
      bonus += 3;
    }

    return bonus;
  }

  /**
   * Apply diversity to avoid too many similar recommendations
   */
  applyDiversityFilter(scoredVendors, allVendors, maxResults) {
    const selected = [];
    const categoryCounts = new Map();
    const cuisineCounts = new Map();
    const maxPerCategory = Math.ceil(maxResults / 3); // Max 1/3 from same category

    for (const sv of scoredVendors) {
      const vendor = allVendors.find(v => v.id === sv.vendorId);
      if (!vendor) continue;

      const categoryCount = categoryCounts.get(vendor.category) || 0;
      const cuisineCount = vendor.cuisine ? (cuisineCounts.get(vendor.cuisine) || 0) : 0;

      // Apply diversity constraints
      if (categoryCount < maxPerCategory && cuisineCount < maxPerCategory) {
        selected.push(sv);
        categoryCounts.set(vendor.category, categoryCount + 1);
        if (vendor.cuisine) {
          cuisineCounts.set(vendor.cuisine, cuisineCount + 1);
        }
      } else {
        // Still add but penalize score
        selected.push({ ...sv, score: sv.score * 0.7 });
      }

      if (selected.length >= maxResults * 2) break; // Get enough candidates
    }

    return selected.sort((a, b) => b.score - a.score);
  }

  /**
   * Add exploratory recommendations (explore vs exploit)
   */
  addExploratoryRecommendations(sortedVendors, allCandidates, maxResults, explorationRate) {
    const exploratoryCount = Math.floor(maxResults * explorationRate);
    const exploitCount = maxResults - exploratoryCount;

    // Take top exploit recommendations
    const exploitRecommendations = sortedVendors.slice(0, exploitCount);

    // Get unexplored vendors (not in top results)
    const topVendorIds = new Set(sortedVendors.slice(0, exploitCount).map(sv => sv.vendorId));
    const unexplored = sortedVendors.filter(sv => !topVendorIds.has(sv.vendorId));

    // Randomly sample from unexplored with bias toward higher scores
    const exploratory = this.weightedRandomSample(unexplored, exploratoryCount);

    // Mark exploratory recommendations
    exploratory.forEach(sv => {
      sv.reasons = ['Recommended for you to explore', ...sv.reasons];
    });

    return [...exploitRecommendations, ...exploratory];
  }

  /**
   * Weighted random sampling (higher scores more likely)
   */
  weightedRandomSample(items, count) {
    if (items.length <= count) return items;

    const sampled = [];
    const remaining = [...items];

    for (let i = 0; i < count && remaining.length > 0; i++) {
      const totalWeight = remaining.reduce((sum, item) => sum + item.score, 0);
      let random = Math.random() * totalWeight;

      for (let j = 0; j < remaining.length; j++) {
        random -= remaining[j].score;
        if (random <= 0) {
          sampled.push(remaining[j]);
          remaining.splice(j, 1);
          break;
        }
      }
    }

    return sampled;
  }

  /**
   * Find similar users with improved algorithm
   */
  async findSimilarUsers(userProfile) {
    // Get vendors user interacted with recently
    const recentVendorIds = userProfile.recentInteractions
      .map(i => i.vendorId)
      .slice(0, 20); // Top 20 recent

    if (recentVendorIds.length === 0) return [];

    const similarUsersMap = new Map();

    // Batch query for better performance
    const batchSize = 10;
    for (let i = 0; i < recentVendorIds.length; i += batchSize) {
      const batch = recentVendorIds.slice(i, i + batchSize);
      
      await Promise.all(batch.map(async (vendorId) => {
        const [favorites, reviews, orders] = await Promise.all([
          getDocs(query(
            collection(db, 'favorites'),
            where('vendorId', '==', vendorId),
            limit(30)
          )),
          getDocs(query(
            collection(db, 'reviews'),
            where('vendorId', '==', vendorId),
            where('rating', '>=', 4),
            limit(30)
          )),
          getDocs(query(
            collection(db, 'orders'),
            where('vendorId', '==', vendorId),
            limit(20)
          ))
        ]);

        // Weight: orders > favorites > reviews
        const processInteraction = (doc, weight) => {
          const data = doc.data();
          if (data.userId !== this.userId) {
            const recencyWeight = this.getRecencyWeight(data.timestamp);
            similarUsersMap.set(
              data.userId,
              (similarUsersMap.get(data.userId) || 0) + (weight * recencyWeight)
            );
          }
        };

        orders.forEach(doc => processInteraction(doc, 3));
        favorites.forEach(doc => processInteraction(doc, 2));
        reviews.forEach(doc => processInteraction(doc, 1));
      }));
    }

    // Return top 30 most similar users
    return Array.from(similarUsersMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 30)
      .map(([userId]) => userId);
  }

  /**
   * Enhanced collaborative filtering score
   */
  async getCollaborativeScore(vendorId, similarUsers) {
    if (similarUsers.length === 0) return 0;

    let score = 0;
    let interactionCount = 0;

    // Check interactions from similar users
    const [favoritesSnap, reviewsSnap, ordersSnap] = await Promise.all([
      getDocs(query(
        collection(db, 'favorites'),
        where('vendorId', '==', vendorId)
      )),
      getDocs(query(
        collection(db, 'reviews'),
        where('vendorId', '==', vendorId)
      )),
      getDocs(query(
        collection(db, 'orders'),
        where('vendorId', '==', vendorId)
      ))
    ]);

    // Orders are strongest signal
    ordersSnap.forEach(doc => {
      const data = doc.data();
      if (similarUsers.includes(data.userId)) {
        score += 10;
        interactionCount++;
      }
    });

    // Favorites
    favoritesSnap.forEach(doc => {
      const data = doc.data();
      if (similarUsers.includes(data.userId)) {
        score += 5;
        interactionCount++;
      }
    });

    // Reviews weighted by rating
    reviewsSnap.forEach(doc => {
      const data = doc.data();
      if (similarUsers.includes(data.userId)) {
        score += data.rating;
        interactionCount++;
      }
    });

    // Normalize by interaction count to avoid bias toward popular items
    if (interactionCount > 0) {
      score = score / Math.log(interactionCount + 2); // Log dampening
    }

    return Math.min(score, 100); // Cap at 100
  }

  /**
   * Enhanced popularity score
   */
  getPopularityScore(vendor) {
    // Rating component (0-50)
    const ratingScore = (vendor.rating / 5) * 50;
    
    // Review count with diminishing returns
    const reviewScore = Math.min(Math.log(vendor.reviewCount + 1) * 10, 50);
    
    return ratingScore + reviewScore;
  }

  /**
   * Enhanced location score with context
   */
  getLocationScore(distance) {
    if (!distance) return 50;
    
    // Adjust for delivery context
    const isRushHour = this.userContext.isRushHour;
    const multiplier = isRushHour ? 1.5 : 1.0; // Prefer closer during rush hour
    
    const adjustedDistance = distance * multiplier;
    
    if (adjustedDistance < 1) return 100;
    if (adjustedDistance < 2) return 85;
    if (adjustedDistance < 3) return 70;
    if (adjustedDistance < 5) return 50;
    if (adjustedDistance < 10) return 30;
    return 10;
  }

  /**
   * Get trending vendors with time-based analysis
   */
  async getTrendingVendors(maxResults = 5, timeWindow = 7) {
    const windowStart = new Date();
    windowStart.setDate(windowStart.getDate() - timeWindow);

    const [favoritesSnap, ordersSnap] = await Promise.all([
      getDocs(query(
        collection(db, 'favorites'),
        where('timestamp', '>=', Timestamp.fromDate(windowStart))
      )),
      getDocs(query(
        collection(db, 'orders'),
        where('timestamp', '>=', Timestamp.fromDate(windowStart))
      ))
    ]);

    const vendorScores = new Map();

    // Orders weighted more than favorites
    ordersSnap.forEach(doc => {
      const data = doc.data();
      vendorScores.set(data.vendorId, (vendorScores.get(data.vendorId) || 0) + 2);
    });

    favoritesSnap.forEach(doc => {
      const data = doc.data();
      vendorScores.set(data.vendorId, (vendorScores.get(data.vendorId) || 0) + 1);
    });

    const trendingVendorIds = Array.from(vendorScores.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, maxResults)
      .map(([vendorId]) => vendorId);

    const allVendors = await this.getAllVendors();
    return allVendors.filter(v => trendingVendorIds.includes(v.id));
  }

  /**
   * Shuffle array using Fisher-Yates algorithm
   */
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // ============= Helper Methods with Caching =============

  async getUserFavorites() {
    const snap = await getDocs(
      query(collection(db, 'favorites'), where('userId', '==', this.userId))
    );
    return snap.docs.map(doc => ({
      ...doc.data(),
      timestamp: doc.data().timestamp?.toMillis() || Date.now()
    }));
  }

  async getUserReviews() {
    const snap = await getDocs(
      query(collection(db, 'reviews'), where('userId', '==', this.userId))
    );
    return snap.docs.map(doc => ({
      ...doc.data(),
      timestamp: doc.data().timestamp?.toMillis() || Date.now()
    }));
  }

  async getUserOrders() {
    const snap = await getDocs(
      query(
        collection(db, 'orders'), 
        where('userId', '==', this.userId),
        orderBy('timestamp', 'desc'),
        limit(50) // Limit to recent orders
      )
    );
    return snap.docs.map(doc => ({
      ...doc.data(),
      timestamp: doc.data().timestamp?.toMillis() || Date.now()
    }));
  }

  async getAllVendors() {
    // Check cache
    const now = Date.now();
    if (this.cache.vendors && 
        (now - this.cache.vendorsTimestamp) < this.cache.CACHE_DURATION) {
      return this.cache.vendors;
    }

    // Fetch from database
    const snap = await getDocs(collection(db, 'vendor_list'));
    const vendors = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Update cache
    this.cache.vendors = vendors;
    this.cache.vendorsTimestamp = now;

    return vendors;
  }

  /**
   * Clear cache manually if needed
   */
  clearCache() {
    this.cache.vendors = null;
    this.cache.vendorsTimestamp = null;
  }
}

// ============= Convenience Functions =============

export async function getRecommendationsForUser(userId, maxResults = 10, context = {}) {
  const engine = new RecommendationEngine(userId, context);
  return engine.getRecommendations(maxResults);
}

export async function getTrendingVendors(userId, maxResults = 5) {
  const engine = new RecommendationEngine(userId);
  return engine.getTrendingVendors(maxResults);
}

export async function getContextualRecommendations(userId, context) {
  // Context example: { weather: 'rainy', time: 'dinner', budget: 500, isRushHour: true }
  const engine = new RecommendationEngine(userId, context);
  return engine.getRecommendations(10, { includeDiversity: true, explorationRate: 0.15 });
}