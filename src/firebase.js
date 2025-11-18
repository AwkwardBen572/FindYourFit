import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA88mxzUStbuMFKNr9Q0OODtHXmpyuqvBY",
  authDomain: "findyourfit-93e9f.firebaseapp.com",
  projectId: "findyourfit-93e9f",
  storageBucket: "findyourfit-93e9f.firebasestorage.app",
  messagingSenderId: "715690823951",
  appId: "1:715690823951:web:f3af86677f7d990c55ae7a",
  measurementId: "G-2GTC9GRYRL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };