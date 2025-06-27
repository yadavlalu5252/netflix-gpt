// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzyb6Nu3r3Q722togKxrePGgUFWf72i9o",
  authDomain: "netflix-gpt-ba6af.firebaseapp.com",
  projectId: "netflix-gpt-ba6af",
  storageBucket: "netflix-gpt-ba6af.firebasestorage.app",
  messagingSenderId: "439627834050",
  appId: "1:439627834050:web:26c0607d1c5a3cdb86515b",
  measurementId: "G-3B159PNB75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);