// recommendationService.js - Fixed Version with Rating Calculation
import { collection, query, where, getDocs, orderBy, limit, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export class RecommendationEngine {
  constructor(userId, userContext = {}) {
    this.userId = userId;
    this.userContext = userContext;
    this.cache = {
      vendors: null,
      vendorsTimestamp: null,
      CACHE_DURATION: 5 * 60 * 1000,
      lastRecommendations: [],
      lastRecommendationsTime: null
    };
  }

  async getRecommendations(maxResults = 10, options = {}) {
    const { 
      includeDiversity = true, 
      explorationRate = 0.2,
      filterClosed = true 
    } = options;

    try {
      // 1. Get user's activity
      const [userFavorites, userReviews, userOrders] = await Promise.all([
        this.getUserFavorites(),
        this.getUserReviews(),
        this.getUserOrders()
      ]);

      // 2. Get all vendors (with ratings)
      const allVendors = await this.getAllVendors();

      // 3. Filter vendors
      const interactedVendorIds = new Set([
        ...userFavorites.map(f => f.vendorId),
        ...userReviews.map(r => r.vendorId),
        ...userOrders.map(o => o.vendorId)
      ]);

      let candidateVendors = allVendors.filter(v => {
        if (interactedVendorIds.has(v.id)) return false;
        if (filterClosed && v.isClosed === true) return false;
        return true;
      });

      // Debug logging
      console.log('Total vendors:', allVendors.length);
      console.log('Candidate vendors:', candidateVendors.length);
      console.log('Interacted vendors:', interactedVendorIds.size);

      // Handle cold start
      const isNewUser = userFavorites.length === 0 && 
                        userReviews.length === 0 && 
                        userOrders.length === 0;

      // 4. Build user profile
      const userProfile = this.buildUserProfile(userFavorites, userReviews, userOrders, allVendors);

      // 5. Calculate scores
      const scoredVendors = await this.scoreVendors(
        candidateVendors,
        userProfile,
        allVendors,
        isNewUser
      );

      // 6. Sort by score
      let sortedVendors = scoredVendors.sort((a, b) => b.score - a.score);

      // 7. Apply diversity
      if (includeDiversity && !isNewUser) {
        sortedVendors = this.applyDiversityFilter(sortedVendors, allVendors, maxResults);
      }

      // 8. For new users, shuffle top results
      if (isNewUser) {
        const topCandidates = sortedVendors.slice(0, maxResults * 2);
        sortedVendors = this.shuffleArray(topCandidates);
      }

      // 9. Add exploration
      if (explorationRate > 0 && !isNewUser) {
        sortedVendors = this.addExploratoryRecommendations(
          sortedVendors, 
          candidateVendors, 
          maxResults, 
          explorationRate
        );
      }

      // 10. Shuffle vendors with similar scores to add variation
      sortedVendors = this.shuffleSimilarScores(sortedVendors, maxResults);

      // 11. Avoid showing exact same recommendations repeatedly
      sortedVendors = this.avoidRepetition(sortedVendors, maxResults);

      // Debug top scores
      console.log('Top 5 scores:', sortedVendors.slice(0, 5).map(v => ({
        id: v.vendorId,
        score: v.score.toFixed(2),
        reasons: v.reasons
      })));

      // Cache current recommendations
      this.cache.lastRecommendations = sortedVendors.slice(0, maxResults).map(sv => sv.vendorId);
      this.cache.lastRecommendationsTime = Date.now();

      // 12. Return top N
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

    const interactions = [
      ...orders.map(o => ({ ...o, weight: 3, type: 'order' })),
      ...favorites.map(f => ({ ...f, weight: 2, type: 'favorite' })),
      ...reviews.filter(r => (r.rating || 0) >= 4).map(r => ({ ...r, weight: 1, type: 'review' }))
    ];

    interactions.forEach(interaction => {
      const vendor = vendorMap.get(interaction.vendorId);
      if (!vendor) return;

      const recencyWeight = this.getRecencyWeight(interaction.timestamp);
      const finalWeight = interaction.weight * recencyWeight;

      // Track categories - handle missing category
      const category = vendor.category || 'Other';
      profile.categories.set(
        category,
        (profile.categories.get(category) || 0) + finalWeight
      );

      // Track price ranges - handle missing priceRange
      const priceRange = vendor.priceRange || 'medium';
      profile.priceRanges.set(
        priceRange,
        (profile.priceRanges.get(priceRange) || 0) + finalWeight
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
          category: category,
          type: interaction.type
        });
      }
    });

    // Calculate average order value
    if (orders.length > 0) {
      const totalAmount = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
      profile.avgOrderValue = totalAmount / orders.length;
    }

    return profile;
  }

  extractFavoriteTime(orders) {
    if (orders.length === 0) return null;
    
    const hourCounts = new Array(24).fill(0);
    orders.forEach(order => {
      if (order.timestamp) {
        const hour = new Date(order.timestamp).getHours();
        hourCounts[hour]++;
      }
    });

    const maxCount = Math.max(...hourCounts);
    if (maxCount === 0) return null;
    
    return hourCounts.indexOf(maxCount);
  }

  getRecencyWeight(timestamp) {
    if (!timestamp) return 0.5;
    
    const daysSince = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
    
    if (daysSince < 7) return 1.5;
    if (daysSince < 30) return 1.2;
    if (daysSince < 90) return 1.0;
    if (daysSince < 180) return 0.7;
    return 0.5;
  }

  async scoreVendors(candidates, userProfile, allVendors, isNewUser) {
    const scores = [];
    const similarUsers = isNewUser ? [] : await this.findSimilarUsers(userProfile);

    for (const vendor of candidates) {
      let score = 0;
      const reasons = [];
      const features = {};

      // Track if vendor has low data
      const reviewCount = vendor.reviewCount || 0;
      const hasLowData = reviewCount < 5;

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
      const category = vendor.category || 'Other';
      const categoryWeight = userProfile.categories.get(category) || 0;
      if (categoryWeight > 0) {
        const categoryScore = Math.min(categoryWeight * 10, 30);
        score += categoryScore;
        features.categoryMatch = categoryWeight;
        reasons.push(`You love ${category}`);
      }

      const priceRange = vendor.priceRange || 'medium';
      const priceWeight = userProfile.priceRanges.get(priceRange) || 0;
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
      
      const rating = vendor.rating || 0;
      if (rating >= 4.7) {
        reasons.push('Exceptional ratings (4.7+★)');
      } else if (rating >= 4.5) {
        reasons.push('Highly rated');
      } else if (hasLowData && rating === 0) {
        reasons.push('New - be the first to try!');
      }

      // 4. Location Score (10% weight)
      const distance = vendor.distance || 5;
      const locationScore = this.getLocationScore(distance);
      score += locationScore * 0.1;
      features.location = locationScore;
      
      if (distance < 1) {
        reasons.push('Very close by');
      } else if (distance < 3) {
        reasons.push('Nearby');
      }

      // 5. Context-Aware Bonuses (5% total)
      const contextBonus = this.getContextualBonus(vendor, userProfile);
      score += contextBonus;
      features.contextual = contextBonus;

      if (contextBonus > 5) {
        if (this.userContext.weather === 'rainy' && category === 'Comfort Food') {
          reasons.push('Perfect for rainy weather');
        }
        if (this.userContext.time === 'breakfast' && vendor.hasBreakfast) {
          reasons.push('Great breakfast options');
        }
      }

      // 6. Freshness Boost
      if (vendor.isNew === true) {
        score += 5;
        reasons.push('New vendor - give them a try!');
      }

      // 7. Trending Boost
      if (vendor.isTrending === true) {
        score += 8;
        reasons.push('Trending now');
      }

      // 8. Increased randomization, especially for low-data vendors
      let randomBoost;
      if (isNewUser) {
        randomBoost = Math.random() * 10;
      } else if (hasLowData) {
        randomBoost = Math.random() * 20;
      } else {
        randomBoost = Math.random() * 5;
      }
      score += randomBoost;

      // 9. Boost for vendors that haven't been recommended recently
      if (this.cache.lastRecommendations && 
          !this.cache.lastRecommendations.includes(vendor.id)) {
        score += 3;
      }

      scores.push({
        vendorId: vendor.id,
        score,
        reasons: reasons.slice(0, 3),
        features,
        hasLowData
      });
    }

    return scores;
  }

  shuffleSimilarScores(sortedVendors, maxResults) {
    if (sortedVendors.length < 2) return sortedVendors;

    const result = [];
    const threshold = maxResults * 2;
    const topVendors = sortedVendors.slice(0, Math.min(threshold, sortedVendors.length));
    const remaining = sortedVendors.slice(Math.min(threshold, sortedVendors.length));

    let i = 0;
    while (i < topVendors.length) {
      const currentScore = topVendors[i].score;
      const similarGroup = [topVendors[i]];
      let j = i + 1;

      while (j < topVendors.length) {
        const scoreDiff = Math.abs(topVendors[j].score - currentScore) / currentScore;
        if (scoreDiff < 0.15) {
          similarGroup.push(topVendors[j]);
          j++;
        } else {
          break;
        }
      }

      if (similarGroup.length >= 3) {
        result.push(...this.shuffleArray(similarGroup));
      } else {
        result.push(...similarGroup);
      }

      i = j;
    }

    return [...result, ...remaining];
  }

  avoidRepetition(sortedVendors, maxResults) {
    const now = Date.now();
    const recentWindow = 2 * 60 * 1000;

    if (!this.cache.lastRecommendations || 
        !this.cache.lastRecommendationsTime ||
        (now - this.cache.lastRecommendationsTime) > recentWindow) {
      return sortedVendors;
    }

    const lastShown = new Set(this.cache.lastRecommendations);
    const notRecentlyShown = [];
    const recentlyShown = [];

    sortedVendors.forEach(sv => {
      if (lastShown.has(sv.vendorId)) {
        recentlyShown.push({ ...sv, score: sv.score * 0.7 });
      } else {
        notRecentlyShown.push(sv);
      }
    });

    const combined = [...notRecentlyShown, ...recentlyShown];
    return combined.sort((a, b) => b.score - a.score);
  }

  getContextualBonus(vendor, userProfile) {
    let bonus = 0;

    if (this.userContext.time) {
      const currentHour = new Date().getHours();
      if (currentHour >= 6 && currentHour < 11 && vendor.hasBreakfast === true) {
        bonus += 5;
      } else if (currentHour >= 11 && currentHour < 15 && vendor.hasLunch === true) {
        bonus += 5;
      } else if (currentHour >= 17 && currentHour < 23 && vendor.hasDinner === true) {
        bonus += 5;
      }

      if (userProfile.favoriteTime !== null) {
        const timeDiff = Math.abs(currentHour - userProfile.favoriteTime);
        if (timeDiff < 2) bonus += 3;
      }
    }

    if (this.userContext.weather) {
      const category = vendor.category || '';
      if (this.userContext.weather === 'rainy' && 
          ['Comfort Food', 'Soup', 'Hot Drinks'].includes(category)) {
        bonus += 5;
      }
      if (this.userContext.weather === 'hot' && 
          ['Ice Cream', 'Smoothies', 'Cold Drinks'].includes(category)) {
        bonus += 5;
      }
    }

    if (this.userContext.budget && vendor.avgPrice) {
      const priceDiff = Math.abs(vendor.avgPrice - this.userContext.budget);
      if (priceDiff < this.userContext.budget * 0.2) {
        bonus += 5;
      }
    }

    const dayOfWeek = new Date().getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    if (isWeekend && vendor.popularOnWeekends === true) {
      bonus += 3;
    }

    return bonus;
  }

  applyDiversityFilter(scoredVendors, allVendors, maxResults) {
    const selected = [];
    const categoryCounts = new Map();
    const cuisineCounts = new Map();
    const maxPerCategory = Math.ceil(maxResults / 3);

    for (const sv of scoredVendors) {
      const vendor = allVendors.find(v => v.id === sv.vendorId);
      if (!vendor) continue;

      const category = vendor.category || 'Other';
      const cuisine = vendor.cuisine || null;
      
      const categoryCount = categoryCounts.get(category) || 0;
      const cuisineCount = cuisine ? (cuisineCounts.get(cuisine) || 0) : 0;

      if (categoryCount < maxPerCategory && cuisineCount < maxPerCategory) {
        selected.push(sv);
        categoryCounts.set(category, categoryCount + 1);
        if (cuisine) {
          cuisineCounts.set(cuisine, cuisineCount + 1);
        }
      } else {
        selected.push({ ...sv, score: sv.score * 0.7 });
      }

      if (selected.length >= maxResults * 2) break;
    }

    return selected.sort((a, b) => b.score - a.score);
  }

  addExploratoryRecommendations(sortedVendors, allCandidates, maxResults, explorationRate) {
    const exploratoryCount = Math.floor(maxResults * explorationRate);
    const exploitCount = maxResults - exploratoryCount;

    const exploitRecommendations = sortedVendors.slice(0, exploitCount);

    const topVendorIds = new Set(sortedVendors.slice(0, exploitCount).map(sv => sv.vendorId));
    const unexplored = sortedVendors.filter(sv => !topVendorIds.has(sv.vendorId));

    const exploratory = this.weightedRandomSample(unexplored, exploratoryCount);

    exploratory.forEach(sv => {
      sv.reasons = ['Recommended for you to explore', ...sv.reasons];
    });

    return [...exploitRecommendations, ...exploratory];
  }

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

  async findSimilarUsers(userProfile) {
    const recentVendorIds = userProfile.recentInteractions
      .map(i => i.vendorId)
      .slice(0, 15);

    if (recentVendorIds.length === 0) return [];

    const similarUsersMap = new Map();

    const batchSize = 5;
    for (let i = 0; i < recentVendorIds.length; i += batchSize) {
      const batch = recentVendorIds.slice(i, i + batchSize);
      
      await Promise.all(batch.map(async (vendorId) => {
        try {
          const [favorites, reviews, orders] = await Promise.all([
            getDocs(query(
              collection(db, 'favorites'),
              where('vendorId', '==', vendorId),
              limit(20)
            )),
            getDocs(query(
              collection(db, 'reviews'),
              where('vendorId', '==', vendorId),
              limit(20)
            )),
            getDocs(query(
              collection(db, 'orders'),
              where('vendorId', '==', vendorId),
              limit(15)
            ))
          ]);

          const processInteraction = (doc, weight) => {
            const data = doc.data();
            if (data.userId && data.userId !== this.userId) {
              const recencyWeight = this.getRecencyWeight(data.timestamp?.toMillis?.() || Date.now());
              similarUsersMap.set(
                data.userId,
                (similarUsersMap.get(data.userId) || 0) + (weight * recencyWeight)
              );
            }
          };

          orders.forEach(doc => processInteraction(doc, 3));
          favorites.forEach(doc => processInteraction(doc, 2));
          reviews.forEach(doc => {
            if ((doc.data().rating || 0) >= 4) {
              processInteraction(doc, 1);
            }
          });
        } catch (error) {
          console.error(`Error finding similar users for vendor ${vendorId}:`, error);
        }
      }));
    }

    return Array.from(similarUsersMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([userId]) => userId);
  }

  async getCollaborativeScore(vendorId, similarUsers) {
    if (similarUsers.length === 0) return 0;

    let score = 0;
    let interactionCount = 0;

    try {
      const [favoritesSnap, reviewsSnap, ordersSnap] = await Promise.all([
        getDocs(query(
          collection(db, 'favorites'),
          where('vendorId', '==', vendorId),
          limit(50)
        )),
        getDocs(query(
          collection(db, 'reviews'),
          where('vendorId', '==', vendorId),
          limit(50)
        )),
        getDocs(query(
          collection(db, 'orders'),
          where('vendorId', '==', vendorId),
          limit(30)
        ))
      ]);

      ordersSnap.forEach(doc => {
        const data = doc.data();
        if (data.userId && similarUsers.includes(data.userId)) {
          score += 10;
          interactionCount++;
        }
      });

      favoritesSnap.forEach(doc => {
        const data = doc.data();
        if (data.userId && similarUsers.includes(data.userId)) {
          score += 5;
          interactionCount++;
        }
      });

      reviewsSnap.forEach(doc => {
        const data = doc.data();
        if (data.userId && similarUsers.includes(data.userId)) {
          const rating = data.rating || 0;
          score += rating;
          interactionCount++;
        }
      });

      if (interactionCount > 0) {
        score = score / Math.log(interactionCount + 2);
      }

      return Math.min(score, 100);
    } catch (error) {
      console.error('Error calculating collaborative score:', error);
      return 0;
    }
  }

  getPopularityScore(vendor) {
    const rating = vendor.rating || 0;
    const reviewCount = vendor.reviewCount || 0;
    
    const ratingScore = (rating / 5) * 50;
    const reviewScore = Math.min(Math.log(reviewCount + 1) * 10, 50);
    
    return ratingScore + reviewScore;
  }

  getLocationScore(distance) {
    if (!distance) return 50;
    
    const isRushHour = this.userContext.isRushHour === true;
    const multiplier = isRushHour ? 1.5 : 1.0;
    
    const adjustedDistance = distance * multiplier;
    
    if (adjustedDistance < 1) return 100;
    if (adjustedDistance < 2) return 85;
    if (adjustedDistance < 3) return 70;
    if (adjustedDistance < 5) return 50;
    if (adjustedDistance < 10) return 30;
    return 10;
  }

  async getTrendingVendors(maxResults = 5, timeWindow = 7) {
    try {
      const windowStart = new Date();
      windowStart.setDate(windowStart.getDate() - timeWindow);
      const timestampStart = Timestamp.fromDate(windowStart);

      const [favoritesSnap, ordersSnap] = await Promise.all([
        getDocs(query(
          collection(db, 'favorites'),
          where('timestamp', '>=', timestampStart),
          limit(200)
        )),
        getDocs(query(
          collection(db, 'orders'),
          where('timestamp', '>=', timestampStart),
          limit(200)
        ))
      ]);

      const vendorScores = new Map();

      ordersSnap.forEach(doc => {
        const data = doc.data();
        if (data.vendorId) {
          vendorScores.set(data.vendorId, (vendorScores.get(data.vendorId) || 0) + 2);
        }
      });

      favoritesSnap.forEach(doc => {
        const data = doc.data();
        if (data.vendorId) {
          vendorScores.set(data.vendorId, (vendorScores.get(data.vendorId) || 0) + 1);
        }
      });

      const trendingVendorIds = Array.from(vendorScores.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, maxResults)
        .map(([vendorId]) => vendorId);

      const allVendors = await this.getAllVendors();
      return allVendors.filter(v => trendingVendorIds.includes(v.id));
    } catch (error) {
      console.error('Error getting trending vendors:', error);
      return [];
    }
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Helper Methods

  async getUserFavorites() {
    try {
      const snap = await getDocs(
        query(
          collection(db, 'favorites'), 
          where('userId', '==', this.userId),
          limit(100)
        )
      );
      return snap.docs.map(doc => ({
        ...doc.data(),
        timestamp: doc.data().timestamp?.toMillis?.() || Date.now()
      }));
    } catch (error) {
      console.error('Error getting user favorites:', error);
      return [];
    }
  }

  async getUserReviews() {
    try {
      const snap = await getDocs(
        query(
          collection(db, 'reviews'), 
          where('userId', '==', this.userId),
          limit(100)
        )
      );
      return snap.docs.map(doc => ({
        ...doc.data(),
        timestamp: doc.data().timestamp?.toMillis?.() || Date.now()
      }));
    } catch (error) {
      console.error('Error getting user reviews:', error);
      return [];
    }
  }

  async getUserOrders() {
    try {
      const snap = await getDocs(
        query(
          collection(db, 'orders'), 
          where('userId', '==', this.userId),
          limit(50)
        )
      );
      
      const orders = snap.docs.map(doc => ({
        ...doc.data(),
        timestamp: doc.data().timestamp?.toMillis?.() || Date.now()
      }));
      
      orders.sort((a, b) => b.timestamp - a.timestamp);
      return orders;
    } catch (error) {
      console.error('Error getting user orders:', error);
      return [];
    }
  }

  // UPDATED: Calculate vendor rating from reviews
  async calculateVendorRating(vendorId) {
    try {
      const reviewsSnap = await getDocs(
        query(
          collection(db, 'reviews'),
          where('vendorId', '==', vendorId)
        )
      );

      if (reviewsSnap.empty) {
        return { rating: 0, reviewCount: 0 };
      }

      let totalRating = 0;
      let count = 0;

      reviewsSnap.forEach(doc => {
        const reviewData = doc.data();
        if (reviewData.rating && typeof reviewData.rating === 'number') {
          totalRating += reviewData.rating;
          count++;
        }
      });

      const averageRating = count > 0 ? parseFloat((totalRating / count).toFixed(1)) : 0;
      
      return {
        rating: averageRating,
        reviewCount: count
      };
    } catch (error) {
      console.error(`Error calculating rating for vendor ${vendorId}:`, error);
      return { rating: 0, reviewCount: 0 };
    }
  }

  // NEW: Enrich vendors with calculated ratings
  async enrichVendorsWithRatings(vendors) {
    console.log(`Enriching ${vendors.length} vendors with ratings...`);
    
    const batchSize = 10;
    const enrichedVendors = [];
    
    for (let i = 0; i < vendors.length; i += batchSize) {
      const batch = vendors.slice(i, i + batchSize); 
      const ratingPromises = batch.map(vendor => 
        this.calculateVendorRating(vendor.id)
          .then(ratingData => ({
            ...vendor,
            rating: ratingData.rating,
            reviewCount: ratingData.reviewCount
          }))
      );      
      const ratedVendors = await Promise.all(ratingPromises);
      enrichedVendors.push(...ratedVendors);
      console.log(`Processed batch ${i / batchSize + 1}: ${ratedVendors.length} vendors enriched.`);
    }
    
    return enrichedVendors;
  }

  async getAllVendors() {
    const now = Date.now();
    if (this.cache.vendors && 
        this.cache.vendorsTimestamp && 
        (now - this.cache.vendorsTimestamp) < this.cache.CACHE_DURATION) {
      return this.cache.vendors;
    }

    try {
      const snap = await getDocs(collection(db, 'vendor_list'));
      let vendors = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Enrich vendors with ratings
      vendors = await this.enrichVendorsWithRatings(vendors);

      this.cache.vendors = vendors;
      this.cache.vendorsTimestamp = now;
      return vendors;
    } catch (error) {
      console.error('Error getting all vendors:', error);
      return [];
    }
  }
}   
export default RecommendationEngine;
