import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyCOLP4bhtRyXMSDeAItGvelgKQK3l06XcE",
  authDomain: "appdev-is.firebaseapp.com",
  projectId: "appdev-is",
  storageBucket: "appdev-is.appspot.com",
  messagingSenderId: "990439200227",
  appId: "1:990439200227:web:9c77f1af3330ddcb36fcd6",
});

export const auth = app.auth();
export const db = getFirestore(app);
// Initialize Firebase
export default app;
