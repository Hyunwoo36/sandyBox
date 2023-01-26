
// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD66ovU4RpnB5VnZhz9b8h6g3ZrTIU1aHU",
  authDomain: "sandyboxbackend.firebaseapp.com",
  projectId: "sandyboxbackend",
  storageBucket: "sandyboxbackend.appspot.com",
  messagingSenderId: "723402175181",
  appId: "1:723402175181:web:92c06e0e6d8b7ad7f36f84",
  measurementId: "G-R9CWC6DPXG"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
};
const auth = firebase.auth();

export { auth };



const analytics = getAnalytics(app);