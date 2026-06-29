// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiA50-lVPkk2gBq8Dh9RT8utKucJYP6jA",
  authDomain: "orderq-7ce5c.firebaseapp.com",
  projectId: "orderq-7ce5c",
  storageBucket: "orderq-7ce5c.firebasestorage.app",
  messagingSenderId: "797309626278",
  appId: "1:797309626278:web:ae7cffb32cf21ce18c9167",
  measurementId: "G-7714E0D1DC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
