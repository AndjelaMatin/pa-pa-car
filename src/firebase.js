import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7_C2r7yjPTBK6vS74geEMiLU-4CuF1Ro",
  authDomain: "pa-pa-car.firebaseapp.com",
  projectId: "pa-pa-car",
  storageBucket: "pa-pa-car.appspot.com",
  messagingSenderId: "361618019014",
  appId: "1:361618019014:web:0a9daf46a9c785111b7dc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
