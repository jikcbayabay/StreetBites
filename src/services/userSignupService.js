// src/services/userSignupService.js
import {
  createUserWithEmailAndPassword
} from 'firebase/auth';
import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc
} from 'firebase/firestore';
import { auth, db } from '../../firebase';

class UserSignupService {
  /**
   * Checks if an email already exists in Firestore
   * @param {string} email - Email to check
   * @returns {Promise<boolean>}
   */
  async emailExists(email) {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email.toLowerCase().trim()));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error checking email existence:', error);
      return false;
    }
  }

  /**
   * Waits for authentication to be ready
   * @param {number} maxWaitTime - Maximum time to wait in ms
   * @returns {Promise<void>}
   */
  async waitForAuth(maxWaitTime = 3000) {
    const startTime = Date.now();
    while (Date.now() - startTime < maxWaitTime) {
      if (auth.currentUser) {
        console.log('✓ Auth user detected:', auth.currentUser.uid);
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error('Auth timeout - user not found');
  }

  /**
   * Creates a new user document in Firestore
   * @param {string} uid - User ID
   * @param {Object} userData - User data
   * @returns {Promise<void>}
   */
  async createUserDocument(uid, userData) {
    const { email, firstName, lastName, contactNumber } = userData;
    
    const userDoc = {
      uid: uid,
      email: email.toLowerCase().trim(),
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      contact_number: contactNumber.replace(/\s/g, ''),
      role: 'user',
      account_status: 'active',
      created_at: new Date(),
      updated_at: new Date()
    };

    console.log('Creating document at path: users/' + uid);
    console.log('Document data:', userDoc);

    const userDocRef = doc(db, 'users', uid);
    await setDoc(userDocRef, userDoc);
    
    console.log('✓ Document created successfully');
  }

  /**
   * Main signup method
   * @param {Object} userData - Contains email, password, firstName, lastName, contactNumber
   * @returns {Promise<Object>} User data
   */
  async signup(userData) {
    let createdAuthUser = null;

    try {
      const { email, password, firstName, lastName, contactNumber } = userData;

      // Validate input
      if (!email || !password || !firstName || !lastName || !contactNumber) {
        throw new Error('All fields are required');
      }

      console.log('\n=== SIGNUP PROCESS STARTED ===');
      console.log('Email:', email);

      // Step 1: Check if email exists
      console.log('\n[1/5] Checking email availability...');
      const emailAlreadyExists = await this.emailExists(email);
      if (emailAlreadyExists) {
        throw new Error('This email is already registered. Please use a different email or try logging in.');
      }
      console.log('✓ Email available');

      // Step 2: Create Firebase Auth user
      console.log('\n[2/5] Creating Firebase Auth account...');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      createdAuthUser = userCredential.user;
      console.log('✓ Auth account created');
      console.log('   UID:', createdAuthUser.uid);

      // Step 3: Wait for auth to be fully ready
      console.log('\n[3/5] Waiting for authentication to initialize...');
      await this.waitForAuth();
      
      // Step 4: Get and refresh token
      console.log('\n[4/5] Getting authentication token...');
      const token = await createdAuthUser.getIdToken(true);
      console.log('✓ Token obtained:', token.substring(0, 20) + '...');

      // Extra wait to ensure token propagation
      console.log('   Waiting for token to propagate...');
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Step 5: Create Firestore document
      console.log('\n[5/5] Creating user profile in database...');
      await this.createUserDocument(createdAuthUser.uid, userData);

      console.log('\n=== SIGNUP COMPLETED SUCCESSFULLY ===\n');

      // Return user data
      return {
        uid: createdAuthUser.uid,
        docId: createdAuthUser.uid,
        email: email.toLowerCase().trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        contactNumber: contactNumber.replace(/\s/g, ''),
        role: 'user',
        accountStatus: 'active'
      };

    } catch (error) {
      console.error('\n=== SIGNUP FAILED ===');
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      console.error('Full error:', error);

      // If auth user was created but Firestore failed, delete auth user
      if (createdAuthUser && (error.code === 'permission-denied' || error.message.includes('permission'))) {
        console.log('\nCleaning up: Attempting to delete auth user...');
        try {
          await createdAuthUser.delete();
          console.log('✓ Auth user deleted');
        } catch (deleteError) {
          console.error('✗ Failed to delete auth user:', deleteError);
        }
      }

      // Handle and throw formatted error
      return this.handleSignupError(error);
    }
  }

  /**
   * Handles and formats signup errors
   * @param {Error} error - The error to handle
   * @throws {Error} Formatted error message
   */
  handleSignupError(error) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('This email is already registered. Please try logging in or use a different email.');
    } else if (error.code === 'auth/weak-password') {
      throw new Error('Password is too weak. Please use at least 6 characters.');
    } else if (error.code === 'auth/invalid-email') {
      throw new Error('Invalid email format. Please enter a valid email address.');
    } else if (error.code === 'auth/operation-not-allowed') {
      throw new Error('Email/password accounts are not enabled. Please contact support.');
    } else if (error.code === 'permission-denied' || error.message.includes('permission')) {
      throw new Error('Unable to create user profile. Please ensure you are properly authenticated and try again.');
    } else if (error.message.includes('already registered')) {
      throw error;
    } else if (error.message.includes('All fields are required')) {
      throw error;
    } else {
      console.error('Unhandled error:', error);
      throw new Error('Signup failed: ' + (error.message || 'Please try again.'));
    }
  }
}

export default new UserSignupService();