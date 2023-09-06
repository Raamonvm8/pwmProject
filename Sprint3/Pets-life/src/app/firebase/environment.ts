import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth";

const environment = {
  apiKey: "AIzaSyBriOlSgw_MsqBzrUDVz-wyf1E-3j7j_7E",
  authDomain: "my-pets-3e01c.firebaseapp.com",
  projectId: "my-pets-3e01c",
  storageBucket: "my-pets-3e01c.appspot.com",
  messagingSenderId: "142504207925",
  appId: "1:142504207925:web:cfa2b236667921e840737c"
};

// Initialize Firebase
const app = initializeApp(environment);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app)