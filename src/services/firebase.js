// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);