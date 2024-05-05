// import dotenv from 'dotenv';
// dotenv.config();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "landry-blog.firebaseapp.com",
  projectId: "landry-blog",
  storageBucket: "landry-blog.appspot.com",
  messagingSenderId: "170944129608",
  appId: "1:170944129608:web:895eb11de38e0db193867d"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);