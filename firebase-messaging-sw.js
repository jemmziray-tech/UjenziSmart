// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker
firebase.initializeApp({
    apiKey: "AIzaSyCX2C1TXRb20nGtxEaYXGUo2KEH7gbZCY0",
    authDomain: "ujenzismart-878af.firebaseapp.com",
    projectId: "ujenzismart-878af",
    storageBucket: "ujenzismart-878af.firebasestorage.app",
    messagingSenderId: "626807014511",
    appId: "1:626807014511:web:844e137d32048d6460399a",
    measurementId: "G-V8C9KKGKFY"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title || "UjenziSmart Update";
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://ui-avatars.com/api/?name=US&background=10b981&color=fff' // Default icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
