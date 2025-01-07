// script.js

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
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Register service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("firebase-messaging-sw.js").then((registration) => {
        messaging.useServiceWorker(registration);
        console.log("Service Worker Registered");
    }).catch((err) => {
        console.error("Service Worker Registration Failed:", err);
    });
}

// Request permission for notifications
document.getElementById("enable-notifications").addEventListener("click", async () => {
    try {
        const status = await Notification.requestPermission();
        if (status === "granted") {
            console.log("Notification permission granted.");

            // Get FCM token
            const token = await messaging.getToken();
            if (token) {
                console.log("FCM Token:", token);
                document.getElementById("fcm-token").textContent = `FCM Token: ${token}`;
            } else {
                console.error("No FCM token available.");
            }
        } else {
            console.error("Notification permission denied.");
        }
    } catch (err) {
        console.error("Error getting notification permission:", err);
    }
});

// Handle foreground notifications
messaging.onMessage((payload) => {
    console.log("Message received in foreground: ", payload);

    // Show alert for demonstration
    alert(`Foreground Notification: ${payload.notification.title}`);
});