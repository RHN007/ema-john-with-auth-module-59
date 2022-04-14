// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXRksBjj1tmUELfNHeaUjbrHMCEot60sw",
  authDomain: "ema-john-e7c17.firebaseapp.com",
  projectId: "ema-john-e7c17",
  storageBucket: "ema-john-e7c17.appspot.com",
  messagingSenderId: "330552322037",
  appId: "1:330552322037:web:feb0f9547b44c51f0062bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth; 