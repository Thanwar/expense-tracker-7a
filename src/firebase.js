 import firebase from 'firebase/app';
 import 'firebase/messaging';
 
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB4byOIjkR5rBQ8iCAzuGybJkuCO3bCWYA",
    authDomain: "expenceker.firebaseapp.com",
    projectId: "expenceker",
    storageBucket: "expenceker.appspot.com",
    messagingSenderId: "234618435074",
    appId: "1:234618435074:web:25d10ce493e0bf48ff591b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;