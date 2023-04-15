// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxlmDYRCPrFtWr6mZFpZOiQhV6IhDxrpo",
  authDomain: "simple-firebase-10-2-e07fc.firebaseapp.com",
  projectId: "simple-firebase-10-2-e07fc",
  storageBucket: "simple-firebase-10-2-e07fc.appspot.com",
  messagingSenderId: "306271455551",
  appId: "1:306271455551:web:d119cf7a4eccb7c03eeb8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;