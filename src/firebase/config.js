import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD93lHp9WV_A2FvEZO0bjQdlQTBMfiu69I",
    authDomain: "vick-photo-storage.firebaseapp.com",
    databaseURL: "https://vick-photo-storage.firebaseio.com",
    projectId: "vick-photo-storage",
    storageBucket: "vick-photo-storage.appspot.com",
    messagingSenderId: "67572719335",
    appId: "1:67572719335:web:4e4e4a7d692a25d80e8c42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();//Photo Storage
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};