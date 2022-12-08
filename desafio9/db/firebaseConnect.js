import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
    apiKey: process.env.apiKey,
    authDomain: "codeecommerce-cf814.firebaseapp.com",
    projectId: "codeecommerce-cf814",
    storageBucket: "codeecommerce-cf814.appspot.com",
    messagingSenderId: "1024409513495",
    appId: "1:1024409513495:web:2aab4432d8b13f353ab652",
    measurementId: "G-Q0JHYEHN7E",
});

const db = getFirestore(app);

export default db;
