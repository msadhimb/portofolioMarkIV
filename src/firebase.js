// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB3uFLFVc_3YtZ76eTTid5RnPpdwO-PoPY",
  authDomain: "portofolio-c57fc.firebaseapp.com",
  projectId: "portofolio-c57fc",
  storageBucket: "portofolio-c57fc.appspot.com",
  messagingSenderId: "849114125219",
  appId: "1:849114125219:web:b57d945690564580b68016",
  measurementId: "G-XCP9Q0341J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
