// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpPJ_b7l-qC-qaCZwI3Ldh0ZLTChOD38o",
  authDomain: "beersofnorway-393ab.firebaseapp.com",
  projectId: "beersofnorway-393ab",
  storageBucket: "beersofnorway-393ab.firebasestorage.app",
  messagingSenderId: "1048749941631",
  appId: "1:1048749941631:web:47c6e1e759931b3c5cf04a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app)
export { db, auth };
