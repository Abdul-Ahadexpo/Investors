// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDafFGXAPvJM25ukqNZSm4ra5S6ACCfbEs",
  authDomain: "money-4a855.firebaseapp.com",
  projectId: "money-4a855",
  storageBucket: "money-4a855.firebasestorage.app",
  messagingSenderId: "893595455729",
  appId: "1:893595455729:web:6ce038d127b3e2f3abd950",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
