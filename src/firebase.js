import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn9IlyZzIV8gctQYCZD7dWdmg-fCsH_U0",
  authDomain: "dn-twitterclone.firebaseapp.com",
  projectId: "dn-twitterclone",
  storageBucket: "dn-twitterclone.appspot.com",
  messagingSenderId: "972818197429",
  appId: "1:972818197429:web:5a37bc6956003947bd87fc",
  measurementId: "G-QPXCZSGBSP",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
