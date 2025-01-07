
// firebase-messaging-sw.js

// IMPORTANT: The code below is minimal for demonstration. 
// In production, you might handle the notification details more thoroughly.

importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

// Your provided Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAXZgxM6PU-T3D2811KnBszblRWju7rv1Y",
  authDomain: "dws-management.firebaseapp.com",
  projectId: "dws-management",
  storageBucket: "dws-management.firebasestorage.app",
  messagingSenderId: "23827231923",
  appId: "1:23827231923:web:97141b6d19c7cd109d2cc6",
  measurementId: "G-L14GLJDYW7"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message:", payload);
  
  // Customize notification here
  const notificationTitle = payload.notification?.title || "Background Title";
  const notificationOptions = {
    body: payload.notification?.body || "Background Body",
    icon: "/firebase-logo.png", // Provide your own icon if needed
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});