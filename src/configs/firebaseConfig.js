import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4slNUVK6Cs0C85XlcsDR1Cu6gukIfaH8",
  authDomain: "spotify-project-1ccf6.firebaseapp.com",
  projectId: "spotify-project-1ccf6",
  storageBucket: "spotify-project-1ccf6.appspot.com",
  messagingSenderId: "389844768763",
  appId: "1:389844768763:web:270c7e9fbfff147e139d5e",
  measurementId: "G-4M84P3NTVP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, db, storage, facebookProvider, googleProvider };
