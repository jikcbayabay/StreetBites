// backend/firebase.js
// Firebase Configuration and Initialization

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// TODO: Replace these values with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyCMcWQBH1lxPNm6dSNoeT9RDSvUwAlFAkM",
  authDomain: "streetbites-app.firebaseapp.com",
  projectId: "streetbites-app",
  storageBucket: "streetbites-app.firebasestorage.app",
  messagingSenderId: "543680507157",
  appId: "1:543680507157:web:ca617d6b495f7fb6f2cd1c",
  measurementId: "G-5EWKZJ0V6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Export the app instance (useful for some operations)
export default app;