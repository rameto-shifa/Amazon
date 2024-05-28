// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app";

import {getAuth} from "firebase/auth";
import "firebase/compat/firestore" ;
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeozPTZZY1HO-fXwxTxEiOYPFSJU6V7t8",
  authDomain: "clone-3b183.firebaseapp.com",
  projectId: "clone-3b183",
  storageBucket: "clone-3b183.appspot.com",
  messagingSenderId: "416806025102",
  appId: "1:416806025102:web:3a8364bd40e18d90efd6df"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = app.firestore();
