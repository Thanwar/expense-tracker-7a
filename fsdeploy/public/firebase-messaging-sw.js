importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

firebase.initializeApp(
    {
        apiKey: "AIzaSyB4byOIjkR5rBQ8iCAzuGybJkuCO3bCWYA",
        authDomain: "expenceker.firebaseapp.com",
        projectId: "expenceker",
        storageBucket: "expenceker.appspot.com",
        messagingSenderId: "234618435074",
        appId: "1:234618435074:web:25d10ce493e0bf48ff591b"
    }
);

firebase.messaging();