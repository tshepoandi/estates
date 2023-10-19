// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import dotenv from "dotenv";
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "mernestate-d14be.firebaseapp.com",
    projectId: "mernestate-d14be",
    storageBucket: "mernestate-d14be.appspot.com",
    messagingSenderId: "724404216408",
    appId: "1:724404216408:web:67fd7b19ab60820047602d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);