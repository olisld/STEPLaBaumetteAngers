// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCl8zag9-o0HCakuticLft795ATqDCCns",
  authDomain: "step-la-baumette-angers.firebaseapp.com",
  projectId: "step-la-baumette-angers",
  storageBucket: "step-la-baumette-angers.firebasestorage.app",
  messagingSenderId: "664416820529",
  appId: "1:664416820529:web:34b173720dd75e55296410",
  measurementId: "G-7ES5QYXHK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Base de données Firestore
export const auth = getAuth(app); // Authentification
const analytics = getAnalytics(app);