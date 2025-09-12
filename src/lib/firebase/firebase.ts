'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  projectId: 'studio-2315710205-76753',
  appId: '1:694894538203:web:276d2cdf52ebec4e310bfe',
  storageBucket: 'studio-2315710205-76753.firebasestorage.app',
  apiKey: 'AIzaSyCAKVD3ufaRVhTTyh6zuxdl7iBzbqUZ7u8',
  authDomain: 'studio-2315710205-76753.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '694894538203',
};

// تهيئة Firebase بطريقة آمنة للخادم والعميل
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth: Auth = getAuth(app);

export { app, auth };
