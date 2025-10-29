// src/services/vendorSignupService.js
import { db } from './firebase';
import { collection, addDoc, doc, getDoc, serverTimestamp } from 'firebase/firestore';

const vendorSignupService = {
  /**
   * Submit a vendor application to Firebase
   * @param {Object} applicationData - The vendor application data
   * @param {string} applicationData.uid - User's Firebase UID
   * @param {string} applicationData.email - User's email
   * @param {string} applicationData.businessName - Business name
   * @param {string} applicationData.address - Business address
   * @param {string} applicationData.operatingHours - Operating hours
   * @returns {Promise<Object>} Application result with ID
   */
  applyAsVendor: async (applicationData) => {
    try {
      const { uid, email, businessName, address, operatingHours } = applicationData;

      // Validate required fields
      if (!uid || !email || !businessName || !address || !operatingHours) {
        throw new Error('All fields are required');
      }

      // Check if user already has a pending or approved application
      const existingApplication = await vendorSignupService.checkExistingApplication(uid);
      if (existingApplication) {
        throw new Error(`You already have a ${existingApplication.status} application`);
      }

      // Prepare application document
      const applicationDoc = {
        uid: uid,
        email: email,
        businessName: businessName,
        address: address,
        operatingHours: operatingHours,
        status: 'pending', // pending, approved, rejected
        appliedAt: serverTimestamp(),
        reviewedAt: null,
        reviewedBy: null,
        rejectionReason: null
      };

      // Add to vendor_applications collection
      const vendorApplicationsRef = collection(db, 'vendor_applications');
      const docRef = await addDoc(vendorApplicationsRef, applicationDoc);

      console.log('Vendor application submitted with ID:', docRef.id);

      return {
        success: true,
        applicationId: docRef.id,
        message: 'Application submitted successfully'
      };

    } catch (error) {
      console.error('Error submitting vendor application:', error);
      throw error;
    }
  },

  /**
   * Check if user has an existing application
   * @param {string} uid - User's Firebase UID
   * @returns {Promise<Object|null>} Existing application or null
   */
  checkExistingApplication: async (uid) => {
    try {
      const { getDocs, query, where } = await import('firebase/firestore');
      const vendorApplicationsRef = collection(db, 'vendor_applications');
      const q = query(
        vendorApplicationsRef,
        where('uid', '==', uid),
        where('status', 'in', ['pending', 'approved'])
      );
      
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return {
          id: doc.id,
          ...doc.data()
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error checking existing application:', error);
      // Don't throw error here, just return null to allow application to proceed
      return null;
    }
  },

  /**
   * Get application status for a user
   * @param {string} uid - User's Firebase UID
   * @returns {Promise<Object|null>} Application status or null
   */
  getApplicationStatus: async (uid) => {
    try {
      const { getDocs, query, where, orderBy, limit } = await import('firebase/firestore');
      const vendorApplicationsRef = collection(db, 'vendor_applications');
      const q = query(
        vendorApplicationsRef,
        where('uid', '==', uid),
        orderBy('appliedAt', 'desc'),
        limit(1)
      );
      
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return {
          id: doc.id,
          ...doc.data()
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error getting application status:', error);
      throw error;
    }
  }
};

export default vendorSignupService;