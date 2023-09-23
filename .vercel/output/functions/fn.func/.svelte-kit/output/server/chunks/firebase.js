import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const PUBLIC_FIREBASE_API_KEY = "AIzaSyDjef4g79exS4nsTvDQRCWljlroikIuhdI";
const PUBLIC_FIREBASE_AUTH_DOMAIN = "vehicle-qr.firebaseapp.com";
const PUBLIC_FIREBASE_PROJECT_ID = "vehicle-qr";
const PUBLIC_FIREBASE_STORAGE_BUCKET = "vehicle-qr.appspot.com";
const PUBLIC_FIREBASE_MESSAGING_SENDER_ID = "385677745209";
const PUBLIC_FIREBASE_APP_ID = '1:385677745209:web:2c75e22b604e42984741e8"';
const firebaseConfig = {
  apiKey: PUBLIC_FIREBASE_API_KEY,
  authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: PUBLIC_FIREBASE_APP_ID
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}
getAuth(firebaseApp);
