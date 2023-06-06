// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2Vaok2Z5VYv0dCe1SdJHudWF0pe1oiPU",
    authDomain: "hackathon2-0-d6ef2.firebaseapp.com",
    projectId: "hackathon2-0-d6ef2",
    storageBucket: "hackathon2-0-d6ef2.appspot.com",
    messagingSenderId: "836765336166",
    appId: "1:836765336166:web:a454d2d942ac65cfd363a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };