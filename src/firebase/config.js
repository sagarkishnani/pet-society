// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-htquoez1IYSuWvejzyPSxr5HcUCBf20",
  authDomain: "pet-society-71e46.firebaseapp.com",
  projectId: "pet-society-71e46",
  storageBucket: "pet-society-71e46.appspot.com",
  messagingSenderId: "75143886166",
  appId: "1:75143886166:web:f68c07bb47224f3d4d92f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
