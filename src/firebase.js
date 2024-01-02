// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "realtor-clone-react-236f5.firebaseapp.com",
  projectId: "realtor-clone-react-236f5",
  storageBucket: "realtor-clone-react-236f5.appspot.com",
  messagingSenderId: "961260360232",
  appId: "1:961260360232:web:e6d12818cf941de4145b1d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
