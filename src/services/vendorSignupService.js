// src/services/vendorSignupService.js
import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc
} from 'firebase/firestore';
import { auth, db } from '../../firebase';

class VendorSignupService {
  /**
   * Checks if a user exists by email in Firestore
   * @param {string} email - Email to check
   * @returns {Promise<Object|null>} User data if exists, null otherwise
   */
  async getUserByEmail(email) {
    try {
      const normalizedEmail = email.toLowerCase().trim();
      console.log('Searching for user with email:', normalizedEmail);
      
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', normalizedEmail));
      const querySnapshot = await getDocs(q);
      
      console.log(`Found ${querySnapshot.size} matching user(s)`);
      
      if (querySnapshot.empty) {
        console.warn('No user found. Attempting alternative search with original case...');
        // Try case-insensitive search as fallback
        const allUsersSnapshot = await getDocs(usersRef);
        const matchingUser = allUsersSnapshot.docs.find(doc => 
          doc.data().email?.toLowerCase() === normalizedEmail
        );
        
        if (matchingUser) {
          console.log('✓ User found via case-insensitive search');
          return {
            uid: matchingUser.id,
            ...matchingUser.data()
          };
        }
        return null;
      }
      
      const userDoc = querySnapshot.docs[0];
      console.log('✓ User found:', userDoc.data());
      return {
        uid: userDoc.id,
        ...userDoc.data()
      };
    } catch (error) {
      console.error('Error checking user existence:', error);
      throw new Error(`Failed to search for user: ${error.message}`);
    }
  }

  /**
   * Checks if a user is already a vendor
   * @param {string} uid - User ID to check
   * @returns {Promise<boolean>}
   */
  async isAlreadyVendor(uid) {
    try {
      const vendorDocRef = doc(db, 'vendors', uid);
      const vendorDoc = await getDoc(vendorDocRef);
      return vendorDoc.exists();
    } catch (error) {
      console.error('Error checking vendor existence:', error);
      return false;
    }
  }

  /**
   * Checks if a business name already exists in vendors collection
   * @param {string} businessName - Business name to check
   * @returns {Promise<boolean>}
   */
  async businessNameExists(businessName) {
    try {
      const vendorsRef = collection(db, 'vendors');
      const q = query(vendorsRef, where('business_name', '==', businessName.trim()));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error checking business name existence:', error);
      return false;
    }
  }

  /**
   * Updates user role to vendor
   * @param {string} uid - User ID
   * @returns {Promise<void>}
   */
  async updateUserRoleToVendor(uid) {
    try {
      console.log('Attempting to update user role for UID:', uid);
      const userDocRef = doc(db, 'users', uid);
      await updateDoc(userDocRef, {
        role: 'vendor',
        updated_at: new Date()
      });
      console.log('✓ User role updated to vendor');
    } catch (error) {
      console.error('Error updating user role:', error.code, error.message);
      throw new Error(`Failed to update user role: ${error.message}`);
    }
  }

  /**
   * Creates a new vendor document in Firestore
   * @param {string} uid - User ID (will be used as vendor doc ID)
   * @param {Object} vendorData - Vendor business data
   * @returns {Promise<void>}
   */
  async createVendorDocument(uid, vendorData) {
    const { businessName, address, operatingHours } = vendorData;
    
    const vendorDoc = {
      user_id: `/users/${uid}`,
      business_name: businessName.trim(),
      address: address.trim(),
      operating_hours: operatingHours.trim(),
      verification_status: 'pending',
      created_at: new Date(),
      updated_at: new Date()
    };

    console.log('Creating vendor document at path: vendors/' + uid);
    console.log('Vendor document data:', vendorDoc);

    const vendorDocRef = doc(db, 'vendors', uid);
    await setDoc(vendorDocRef, vendorDoc);
    
    console.log('✓ Vendor document created successfully');
  }

  /**
   * Main vendor application method (for existing users)
   * @param {Object} applicationData - Contains email and vendor business data
   * @returns {Promise<Object>} Combined user and vendor data
   */
  async applyAsVendor(applicationData) {
    try {
      const { 
        email,
        businessName,
        address,
        operatingHours
      } = applicationData;

      // Validate input
      if (!email || !businessName || !address || !operatingHours) {
        throw new Error('All fields are required');
      }

      console.log('\n=== VENDOR APPLICATION PROCESS STARTED ===');
      console.log('Email provided:', email);
      console.log('Business Name:', businessName);

      // Step 1: Check if user exists
      console.log('\n[1/5] Checking if user account exists...');
      const user = await this.getUserByEmail(email);
      
      if (!user) {
        console.error('User not found in database');
        console.error('Troubleshooting tips:');
        console.error('1. Make sure the email matches exactly (case-sensitive in some systems)');
        console.error('2. Verify the account was created in the "users" collection');
        console.error('3. Check browser console and Firebase console for details');
        throw new Error('No user account found with this email. Please verify:\n1. You used the correct email\n2. The account was successfully created\n3. Try refreshing the page and try again');
      }
      
      console.log('✓ User account found');
      console.log('   UID:', user.uid);
      console.log('   Email:', user.email);

      // Step 2: Check if user is already a vendor
      console.log('\n[2/5] Checking if user is already a vendor...');
      const alreadyVendor = await this.isAlreadyVendor(user.uid);
      if (alreadyVendor) {
        throw new Error('This account is already registered as a vendor.');
      }
      console.log('✓ User is not yet a vendor');

      // Step 3: Check if business name exists
      console.log('\n[3/5] Checking business name availability...');
      const businessExists = await this.businessNameExists(businessName);
      if (businessExists) {
        throw new Error('This business name is already registered. Please use a different name.');
      }
      console.log('✓ Business name available');

      // Step 4: Update user role to vendor
      console.log('\n[4/5] Updating user role to vendor...');
      await this.updateUserRoleToVendor(user.uid);

      // Step 5: Create vendor document in Firestore
      console.log('\n[5/5] Creating vendor profile in database...');
      await this.createVendorDocument(user.uid, {
        businessName,
        address,
        operatingHours
      });

      console.log('\n=== VENDOR APPLICATION COMPLETED SUCCESSFULLY ===\n');

      // Return combined data
      return {
        uid: user.uid,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        contactNumber: user.contact_number,
        role: 'vendor',
        businessName: businessName.trim(),
        address: address.trim(),
        operatingHours: operatingHours.trim(),
        verificationStatus: 'pending'
      };

    } catch (error) {
      console.error('\n=== VENDOR APPLICATION FAILED ===');
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      console.error('Full error:', error);

      // Handle and throw formatted error
      return this.handleApplicationError(error);
    }
  }

  /**
   * Handles and formats application errors
   * @param {Error} error - The error to handle
   * @throws {Error} Formatted error message
   */
  handleApplicationError(error) {
    if (error.code === 'permission-denied' || error.message.includes('permission')) {
      throw new Error('Unable to create vendor profile. Please ensure you are properly authenticated and try again.');
    } else if (error.message.includes('No user account found')) {
      throw error;
    } else if (error.message.includes('already registered as a vendor')) {
      throw error;
    } else if (error.message.includes('already registered')) {
      throw error;
    } else if (error.message.includes('All fields are required')) {
      throw error;
    } else {
      console.error('Unhandled error:', error);
      throw new Error('Vendor application failed: ' + (error.message || 'Please try again.'));
    }
  }
}

export default new VendorSignupService();