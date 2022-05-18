import firebase from '@react-native-firebase/app';
import {getAuth ,
  createUserWithEmailAndPassword,
   } from "@react-native-firebase/auth"
import {getDatabase}            from '@react-native-firebase/database'
// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZkh8nkvgcv6HUWCftIJPkuSZANMvlVLU",
  authDomain: "tathuheo.firebaseapp.com",
  databaseURL: "https://tathuheo-default-rtdb.firebaseio.com",
  projectId: "tathuheo",
  storageBucket: "tathuheo.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:277423826521:android:b2532fa4d14095a7d9f348",
  measurementId: "277423826521"
};

// const app = firebase.firebaseinitializeApp(firebaseConfig)
if (!firebase.apps.length) {
    firebase.initializeApp( firebaseConfig);
 }
const auth = getAuth()
const firebaseDatabase = getDatabase()

export {
  auth,
  firebaseDatabase,
  createUserWithEmailAndPassword,
  firebaseConfig
}