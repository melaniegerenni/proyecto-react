// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdUzGTrxDMBU66hRLZrpadCDRzyUZ8ZoU",
  authDomain: "proyecto-react-js-50675.firebaseapp.com",
  projectId: "proyecto-react-js-50675",
  storageBucket: "proyecto-react-js-50675.appspot.com",
  messagingSenderId: "722455584401",
  appId: "1:722455584401:web:ebda46eff2ab1e0410e930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);