// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxducwun6g0id7UzOsVdnpxDRHlqS7OE8",
  authDomain: "gptflix-fe7ad.firebaseapp.com",
  projectId: "gptflix-fe7ad",
  storageBucket: "gptflix-fe7ad.appspot.com",
  messagingSenderId: "192678646217",
  appId: "1:192678646217:web:9034c63af9f4b610dd9818",
  measurementId: "G-CBJ456BJEC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
