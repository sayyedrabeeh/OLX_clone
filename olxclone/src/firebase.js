import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBl6Eaa_54bM-fRHUEz5sb2z6kqlZI67Vo",
  authDomain: "olxclone-663e8.firebaseapp.com",
  projectId: "olxclone-663e8",
  storageBucket: "olxclone-663e8.appspot.com",
  messagingSenderId: "822747682746",
  appId: "1:822747682746:web:2830c92a9aca35c6f5ef83",
  measurementId: "G-H8Z2KQDC8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup function
export const signup = (name, email, password, phone) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Login function
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const db = getFirestore(app); 
 
export const logout = () => {
    return signOut(auth);
  };
export { db };