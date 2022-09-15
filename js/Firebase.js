// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClPcUa8TiemC5StBlyZN-HdvAEj0y0XmQ",
  authDomain: "e-commerce-41b2b.firebaseapp.com",
  projectId: "e-commerce-41b2b",
  storageBucket: "e-commerce-41b2b.appspot.com",
  messagingSenderId: "1041124521397",
  appId: "1:1041124521397:web:b0730151f86f84181dd5fc",
  measurementId: "G-XDEZJJQ9ET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
