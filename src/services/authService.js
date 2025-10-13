// src/services/authService.js
import { 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';
import { 
  doc,
  getDoc
} from 'firebase/firestore';
import { auth, db } from '../../firebase';

/**
 * Login validation service that checks user credentials and role
 */
class AuthService {
  /**
   * Validates login credentials and checks if user has the correct role
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @param {string} requiredRole - Required role ('user', 'vendor', or 'admin')
   * @returns {Promise<Object>} User data if successful
   * @throws {Error} If validation fails
   */
  async login(email, password, requiredRole) {
    try {
      console.log(`\n=== ${requiredRole.toUpperCase()} LOGIN STARTED ===`);
      console.log('Email:', email);

      // Step 1: Authenticate with Firebase Auth
      console.log('\n[1/4] Authenticating with Firebase...');
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        email.toLowerCase().trim(), 
        password
      );
      const user = userCredential.user;
      console.log('✓ Authentication successful');
      console.log('   UID:', user.uid);

      // Step 2: Wait for auth state to propagate
      console.log('\n[2/4] Initializing session...');
      await new Promise(resolve => setTimeout(resolve, 500));

      // Step 3: Fetch user document directly using UID
      console.log('\n[3/4] Fetching user profile...');
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        console.error('✗ User document not found in Firestore');
        await signOut(auth);
        throw new Error('User profile not found. Please contact support.');
      }

      const userData = userDocSnap.data();
      console.log('✓ User profile loaded');
      console.log('   Role:', userData.role);
      console.log('   Status:', userData.account_status);

      // Step 4: Validate role matches
      console.log('\n[4/4] Validating role and status...');
      if (userData.role !== requiredRole) {
        console.error(`✗ Role mismatch: Expected ${requiredRole}, got ${userData.role}`);
        await signOut(auth);
        throw new Error(`Access denied. This account is not registered as a ${requiredRole}.`);
      }
      console.log('✓ Role validated');

      // Check account status
      if (userData.account_status !== 'active') {
        console.error('✗ Account is not active:', userData.account_status);
        await signOut(auth);
        throw new Error('Account is not active. Please contact support.');
      }
      console.log('✓ Account is active');

      console.log(`\n=== ${requiredRole.toUpperCase()} LOGIN COMPLETED SUCCESSFULLY ===\n`);

      // Return user data
      return {
        uid: user.uid,
        docId: user.uid,
        email: userData.email,
        firstName: userData.first_name,
        lastName: userData.last_name,
        role: userData.role,
        contactNumber: userData.contact_number,
        accountStatus: userData.account_status
      };

    } catch (error) {
      console.error('\n=== LOGIN FAILED ===');
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);

      // Handle specific Firebase errors
      if (error.code === 'auth/user-not-found') {
        throw new Error('No account found with this email address.');
      } else if (error.code === 'auth/wrong-password') {
        throw new Error('Incorrect password. Please try again.');
      } else if (error.code === 'auth/invalid-email') {
        throw new Error('Invalid email format.');
      } else if (error.code === 'auth/user-disabled') {
        throw new Error('This account has been disabled.');
      } else if (error.code === 'auth/too-many-requests') {
        throw new Error('Too many failed login attempts. Please try again later.');
      } else if (error.code === 'auth/invalid-credential') {
        throw new Error('Invalid email or password. Please check your credentials.');
      } else if (error.message.includes('Access denied')) {
        throw error;
      } else if (error.message.includes('not active')) {
        throw error;
      } else if (error.message.includes('profile not found')) {
        throw error;
      } else if (error.code === 'permission-denied') {
        throw new Error('Permission denied. Unable to access user profile.');
      } else {
        console.error('Unknown error during login:', error);
        throw new Error('Login failed. Please try again.');
      }
    }
  }

  /**
   * User login - validates user role
   */
  async userLogin(email, password) {
    return await this.login(email, password, 'user');
  }

  /**
   * Vendor login - validates vendor role
   */
  async vendorLogin(email, password) {
    return await this.login(email, password, 'vendor');
  }

  /**
   * Admin login - validates admin role
   */
  async adminLogin(email, password) {
    return await this.login(email, password, 'admin');
  }

  /**
   * Logout current user
   */
  async logout() {
    try {
      console.log('Logging out user...');
      await signOut(auth);
      localStorage.removeItem('userData');
      console.log('✓ Logout successful');
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      throw new Error('Logout failed. Please try again.');
    }
  }

  /**
   * Get current authenticated user
   */
  getCurrentUser() {
    return auth.currentUser;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    return !!auth.currentUser;
  }
}

// Export singleton instance
export default new AuthService();