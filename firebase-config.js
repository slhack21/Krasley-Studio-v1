
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmcp1ZXvS2nLjAa_QkmyDgWvGQqxrZDjw",
  authDomain: "krasley-71e71.firebaseapp.com",
  projectId: "krasley-71e71",
  storageBucket: "krasley-71e71.firebasestorage.app",
  messagingSenderId: "769651122724",
  appId: "1:769651122724:web:2c19b91b85770601746eb1",
  measurementId: "G-QZH7SP9LH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
