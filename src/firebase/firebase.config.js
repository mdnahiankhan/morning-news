// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgdgY00hb24zR6f5_9D5g3TNvluAUfQ18",
    authDomain: "morning-news-c514f.firebaseapp.com",
    projectId: "morning-news-c514f",
    storageBucket: "morning-news-c514f.appspot.com",
    messagingSenderId: "882687981077",
    appId: "1:882687981077:web:a8ef6524c73598c729401c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;