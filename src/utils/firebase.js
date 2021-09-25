import firebase from "firebase/app";
require("firebase/database");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2v3G-3e63i8lDCUObChQgXwn2xopZqQU",
  authDomain: "fir-chat-ffda8.firebaseapp.com",
  projectId: "fir-chat-ffda8",
  storageBucket: "fir-chat-ffda8.appspot.com",
  messagingSenderId: "631597378053",
  appId: "1:631597378053:web:e624f405936a766c8e0a6c",
  measurementId: "G-HFEE2R7CC7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;