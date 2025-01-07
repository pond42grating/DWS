// script.js

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Register the service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registered, scope:", registration.scope);
      messaging.useServiceWorker(registration);
    })
    .catch((err) => {
      console.error("Service Worker registration failed:", err);
    });
} else {
  console.warn("Service workers aren't supported in this browser.");
}

// Request notification permission and get token
document.getElementById("enable-notifs").addEventListener("click", async () => {
  try {
    await Notification.requestPermission();
    if (Notification.permission === "granted") {
      console.log("Notification permission granted.");

      // Get FCM token
      const currentToken = await messaging.getToken();
      if (currentToken) {
        console.log("FCM Token:", currentToken);
        document.getElementById("token").textContent = 
          "Current FCM Token: " + currentToken;
      } else {
        console.log("No registration token available.");
      }
    } else {
      console.log("Unable to get permission to notify.");
    }
  } catch (error) {
    console.error("Error getting permission:", error);
  }
});

// Handle foreground messages
messaging.onMessage((payload) => {
  console.log("Message received in foreground:", payload);
  // Optionally, show your own custom UI or alert
  alert(`Foreground message: ${payload.notification?.title}`);
});