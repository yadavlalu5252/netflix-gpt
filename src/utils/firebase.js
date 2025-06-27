
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"


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
export const auth = getAuth();