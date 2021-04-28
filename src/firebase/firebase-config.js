import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAIbo4gM6bl7W9sipPQMdUtxPszObWmsDU",
    authDomain: "react-app-journal-bb4ad.firebaseapp.com",
    projectId: "react-app-journal-bb4ad",
    storageBucket: "react-app-journal-bb4ad.appspot.com",
    messagingSenderId: "1097536257960",
    appId: "1:1097536257960:web:f5acf33ebf87b30886a79d"
  };
  // Initialize Firebase


  firebase.initializeApp(firebaseConfig);
  

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
    db,
    googleAuthProvider,
    firebase
  }