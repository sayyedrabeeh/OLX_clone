import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
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
const db = getFirestore(app); // ✅ simple getFirestore

export const signup = (name, email, password, phone) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    return docRef.id;
  } catch (error) {
    console.error("Error adding product to Firestore:", error.message);
    throw error;
  }
};

export { db, auth };
