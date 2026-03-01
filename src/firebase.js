// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWPwThkBGzqKlDaBrq5bDiBl8cdsUMtD4",
    authDomain: "get-homely.firebaseapp.com",
    projectId: "get-homely",
    storageBucket: "get-homely.firebasestorage.app",
    messagingSenderId: "21770779632",
    appId: "1:21770779632:web:6d9bbf897137701f41bb35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged };
