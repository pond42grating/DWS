// Import Firebase Scripts
importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging.js");

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXZgxM6PU-T3D2811KnBszblRWju7rv1Y",
    authDomain: "dws-management.firebaseapp.com",
    projectId: "dws-management",
    storageBucket: "dws-management.appspot.com",
    messagingSenderId: "23827231923",
    appId: "1:23827231923:web:97141b6d19c7cd109d2cc6",
    measurementId: "G-L14GLJDYW7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle Background Notifications
messaging.onBackgroundMessage((payload) => {
    console.log("Received background message:", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});