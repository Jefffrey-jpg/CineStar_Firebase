import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBfwCkVen3czb3kwb0USQVXOFYTeqBSFo",
    authDomain: "cinestar-4791e.firebaseapp.com",
    projectId: "cinestar-4791e",
    storageBucket: "cinestar-4791e.firebasestorage.app",
    messagingSenderId: "772971355283",
    appId: "1:772971355283:web:84b037d910f066a74c8166"
  };      

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getCines = () => getDocs(collection (db, "cines"))
export const getPeliculas = () => getDocs(collection (db, "peliculas"))