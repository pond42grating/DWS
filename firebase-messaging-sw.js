// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js");

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXZgxM6PU-T3D2811KnBszblRWju7rv1Y",
    authDomain: "dws-management.firebaseapp.com",
    projectId: "dws-management",
    storageBucket: "dws-management.firebasestorage.app",
    messagingSenderId: "23827231923",
    appId: "1:23827231923:web:97141b6d19c7cd109d2cc6",
    measurementId: "G-L14GLJDYW7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log("Received background message: ", payload);

    const notificationTitle = payload.notification.title || "Default Title";
    const notificationOptions = {
        body: payload.notification.body || "Default Body",
        icon: payload.notification.icon || "/firebase-logo.png",
    };

    // Show notification
    self.registration.showNotification(notificationTitle, notificationOptions);
});