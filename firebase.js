// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG3SW8h7MxX3oTsTKTu1CoDYmfA9IINyw",
  authDomain: "velvetclothing-359c0.firebaseapp.com",
  projectId: "velvetclothing-359c0",
  storageBucket: "velvetclothing-359c0.appspot.com",
  messagingSenderId: "310087331376",
  appId: "1:310087331376:web:900fc738172023abf087f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


export { auth,db }