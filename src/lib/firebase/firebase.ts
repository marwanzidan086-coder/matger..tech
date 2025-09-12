'use client';

import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: 'studio-2315710205-76753',
  appId: '1:694894538203:web:276d2cdf52ebec4e310bfe',
  storageBucket: 'studio-2315710205-76753.firebasestorage.app',
  apiKey: 'AIzaSyCAKVD3ufaRVhTTyh6zuxdl7iBzbqUZ7u8',
  authDomain: 'studio-2315710205-76753.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '694894538203',
};

let app: FirebaseApp;
let auth: Auth;

// Initialize Firebase
// This check prevents re-initializing the app on every hot-reload
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

auth = getAuth(app);

export { app, auth };
