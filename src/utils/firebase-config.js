import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB0GEj1UBIzeZmrESXTW53NKeDyMverne4",
  authDomain: "iot-custom.firebaseapp.com",
  projectId: "iot-custom",
  storageBucket: "iot-custom.appspot.com",
  messagingSenderId: "669313502715",
  appId: "1:669313502715:web:1b0e9adb935deafdb00f5e",
  measurementId: "G-BD6KJ504PG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
