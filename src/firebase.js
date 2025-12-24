// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <--- ADD THIS
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhYO-4VkLigSwDMM9kirhN6VMN-oy955c",
  authDomain: "react-counter-f86ed.firebaseapp.com",
  projectId: "react-counter-f86ed",
  storageBucket: "react-counter-f86ed.firebasestorage.app",
  messagingSenderId: "761796774434",
  appId: "1:761796774434:web:4525d5deb78d31959f587b",
  measurementId: "G-6LFBZ2VYLC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// 2. Export the database connection
export const db = getFirestore(app); // <--- ADD THIS