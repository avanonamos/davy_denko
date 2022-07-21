import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAfjBdGsurZvYgM7a0VJyVh9jF12ZVdRf4",
  authDomain: "react-authentification-2a971.firebaseapp.com",
  projectId: "react-authentification-2a971",
  storageBucket: "react-authentification-2a971.appspot.com",
  messagingSenderId: "600928113042",
  appId: "1:600928113042:web:0adffb20db2b948e33314b",
  measurementId: "G-YRF99E6F9S",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;
