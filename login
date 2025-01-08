<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Firebase Push Notifications</title>
    <script src="https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
        }

        button:hover {
            background-color: #0056b3;
        }

        #notificationStatus {
            margin-top: 20px;
            color: green;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Firebase Push Notifications</h1>
    <button id="enableNotifications">Enable Notifications</button>
    <p id="notificationStatus"></p>

    <script>
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

        // Request permission and get FCM token
        document.getElementById("enableNotifications").addEventListener("click", async () => {
            try {
                const token = await messaging.getToken({
                    vapidKey: "BEEpj9we6se7W7mwygvgU_SIJN02GxVrkfiqJ-yhQTz-Z5orFlanu0CP_PyQyWAGhQHOnOeAjtUKUjGTyzVoiqw"
                });

                if (token) {
                    document.getElementById("notificationStatus").textContent =
                        "Notifications enabled! Token: " + token;
                    console.log("FCM Token:", token);
                } else {
                    document.getElementById("notificationStatus").textContent =
                        "No registration token available. Request permission to generate one.";
                }
            } catch (err) {
                document.getElementById("notificationStatus").textContent =
                    "Error enabling notifications: " + err.message;
                console.error("Error getting token:", err);
            }
        });

        // Handle incoming messages
        messaging.onMessage((payload) => {
            console.log("Message received: ", payload);
            alert(`New Notification: ${payload.notification.title} - ${payload.notification.body}`);
        });
    </script>
</body>
</html>