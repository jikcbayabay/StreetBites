// functions/index.js

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

// This function triggers whenever a document in the 'reviews' collection is written (created, updated, or deleted).
exports.updateVendorRating = functions.firestore
  .document("reviews/{reviewId}")
  .onWrite(async (change, _context) => {
    // Get the vendorId from the review that was changed.
    // If the review was deleted, we get the data from `change.before`.
    // Otherwise, we get it from `change.after`.
    const reviewData = change.after.exists
      ? change.after.data()
      : change.before.data();
    const vendorId = reviewData.vendorId;

    if (!vendorId) {
      console.log("Review is missing a vendorId. Exiting function.");
      return null;
    }

    // Get a reference to the specific vendor's document.
    const vendorRef = db.collection("vendor_list").doc(vendorId);

    // Get all reviews for that vendor.
    const reviewsSnapshot = await db
      .collection("reviews")
      .where("vendorId", "==", vendorId)
      .get();

    if (reviewsSnapshot.empty) {
      // If there are no reviews, reset the rating and count to 0.
      console.log(`No reviews for vendor ${vendorId}. Resetting rating.`);
      return vendorRef.update({
        numericalRating: 0,
        reviewCount: 0,
      });
    }

    // Calculate the new average rating.
    let totalRating = 0;
    reviewsSnapshot.forEach((doc) => {
      totalRating += doc.data().rating;
    });

    const reviewCount = reviewsSnapshot.size;
    const newAverageRating = totalRating / reviewCount;

    console.log(
      `Updating vendor ${vendorId}: count=${reviewCount}, rating=${newAverageRating.toFixed(2)}`
    );

    // Update the vendor document with the new rating and review count.
    return vendorRef.update({
      numericalRating: parseFloat(newAverageRating.toFixed(2)), // Store as a number with 2 decimal places
      reviewCount: reviewCount,
    });
  });