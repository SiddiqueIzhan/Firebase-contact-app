// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0taHpFyHgpcxV4wahHSRgKst7_3Sxff0",
  authDomain: "contact-app-f50f1.firebaseapp.com",
  projectId: "contact-app-f50f1",
  storageBucket: "contact-app-f50f1.firebasestorage.app",
  messagingSenderId: "685069781906",
  appId: "1:685069781906:web:b4037593ca43071f9c8f4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
