import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyDY79QOt-tUcz7e4_yAgxNHhFVnAV8Lo",
  authDomain: "capp-8167f.firebaseapp.com",
  projectId: "capp-8167f",
  storageBucket: "capp-8167f.appspot.com",
  messagingSenderId: "763867046490",
  appId: "1:763867046490:web:945fcecc29ba185409ae63",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
