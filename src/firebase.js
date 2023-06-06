// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX58LiSoBewuhnLqfox_tZZkc8Te8LlKE",
  authDomain: "nab---app.firebaseapp.com",
  projectId: "nab---app",
  storageBucket: "nab---app.appspot.com",
  messagingSenderId: "317572999447",
  appId: "1:317572999447:web:1d97c78ceddf6fb4416f52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);
