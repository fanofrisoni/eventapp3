import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import {getReactNativePersistence,initializeAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_KEY,
  authDomain: "eventappfrisoni1.firebaseapp.com",
  projectId: "eventappfrisoni1",
  storageBucket: "eventappfrisoni1.appspot.com",
  messagingSenderId: "693777741799",
  appId: "1:693777741799:web:5f15cc96d55b3fc444ef42"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);


export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
})
FIREBASE_AUTH.useDeviceLanguage();
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);