// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO7WKikYFlsOakOEoV7WjHAWmZHHHOoSk",
  authDomain: "inventory-management-b6493.firebaseapp.com",
  projectId: "inventory-management-b6493",
  storageBucket: "inventory-management-b6493.appspot.com",
  messagingSenderId: "895917082354",
  appId: "1:895917082354:web:e68a6dbbf464b66303326b",
  measurementId: "G-KMWZHNKFCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}