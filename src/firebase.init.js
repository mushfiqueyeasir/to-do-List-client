// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtoTQTkZGQM3xA0DUCZXqneRM1rFMXQ4E",
    authDomain: "todolist-9a0a4.firebaseapp.com",
    projectId: "todolist-9a0a4",
    storageBucket: "todolist-9a0a4.appspot.com",
    messagingSenderId: "926553772011",
    appId: "1:926553772011:web:645129ed8632d58c00d3ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
