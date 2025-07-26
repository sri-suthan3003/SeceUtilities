  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBwiLRByQGKH27dkhG1KGwE_vlJtTOZWN8",
    authDomain: "hackdragons-4f350.firebaseapp.com",
    projectId: "hackdragons-4f350",
    storageBucket: "hackdragons-4f350.firebasestorage.app",
    messagingSenderId: "46555310448",
    appId: "1:46555310448:web:bd0f2ac1edd2d5c49047b5",
    measurementId: "G-NE2P2PE6C4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
