import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA4SkgJYd7JkY0N2gUJ6rnfKJGqjUVjUHU",
    authDomain: "nst-cp.firebaseapp.com",
    projectId: "nst-cp",
    storageBucket: "nst-cp.appspot.com",
    messagingSenderId: "966028922920",
    appId: "1:966028922920:web:05861386d72d01e371a51d",
    measurementId: "G-DQR2NXCX8S"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};