// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9K9_YAAdgaRbYDWqpa9FkCyV2z9fuRos",
  authDomain: "log-in-layout.firebaseapp.com",
  projectId: "log-in-layout",
  storageBucket: "log-in-layout.firebasestorage.app",
  messagingSenderId: "740714568376",
  appId: "1:740714568376:web:af4015779653e8c2b7f24d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;