import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCX1dgON-t9kB5G3DLDja70Zr6eX1XvgO8",
    authDomain: "fir-login-4f410.firebaseapp.com",
    projectId: "fir-login-4f410",
    storageBucket: "fir-login-4f410.appspot.com",
    messagingSenderId: "562187922046",
    appId: "1:562187922046:web:e63e6142c920a0ee32462f",
    measurementId: "G-5TPQZ353SN"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp); // For Authentication
const db = getFirestore(firebaseApp); // For Using Database

export { auth, db };