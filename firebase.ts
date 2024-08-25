// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_Py3dpEJBTcFc28fBqPy9nBEljrg1LWA",
    authDomain: "notion-clone-c337a.firebaseapp.com",
    projectId: "notion-clone-c337a",
    storageBucket: "notion-clone-c337a.appspot.com",
    messagingSenderId: "163238918667",
    appId: "1:163238918667:web:f2926a4ddcbd05e97ea50e"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };