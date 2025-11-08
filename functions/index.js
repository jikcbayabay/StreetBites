// functions/index.js

const { onDocumentWritten } = require("firebase-functions/v2/firestore");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

// Trigger whenever a document in 'reviews' is created, updated, or deleted
exports.updateVendorRating = onDocumentWritten("reviews/{reviewId}", async (event) => {
  const beforeData = event.data?.before?.data() || null;
  const afterData = event.data?.after?.data() || null;
  const reviewData = afterData || beforeData;

  if (!reviewData) {
    console.log("No data available from review. Exiting function.");
    return;
  }

  const vendorId = reviewData.vendorId;
  if (!vendorId) {
    console.log("Review is missing a vendorId. Exiting function.");
    return;
  }

  const vendorRef = db.collection("vendor_list").doc(vendorId);

  // Fetch all reviews for this vendor
  const reviewsSnapshot = await db.collection("reviews").where("vendorId", "==", vendorId).get();

  if (reviewsSnapshot.empty) {
    console.log(`No reviews for vendor ${vendorId}. Resetting rating.`);
    await vendorRef.update({
      numericalRating: 0,
      reviewCount: 0,
    });
    return;
  }

  // Calculate new average rating
  let totalRating = 0;
  reviewsSnapshot.forEach((doc) => {
    totalRating += doc.data().rating;
  });

  const reviewCount = reviewsSnapshot.size;
  const newAverageRating = totalRating / reviewCount;

  console.log(
    `Updating vendor ${vendorId}: count=${reviewCount}, rating=${newAverageRating.toFixed(2)}`
  );

  await vendorRef.update({
    numericalRating: parseFloat(newAverageRating.toFixed(2)),
    reviewCount: reviewCount,
  });
});
