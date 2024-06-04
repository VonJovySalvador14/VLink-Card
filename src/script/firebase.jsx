import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNBKiyf9JzNbzZe2pkUjxRz9-Fe_NlyxE",
  authDomain: "vlink-hub.firebaseapp.com",
  projectId: "vlink-hub",
  storageBucket: "vlink-hub.appspot.com",
  messagingSenderId: "731248352280",
  appId: "1:731248352280:web:aa98acb8109472f064b76d",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
