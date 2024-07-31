// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDibHjh6RnUekVu7Fceq5epgaSlzPW98WY",
    authDomain: "ksiu-alimpieva.firebaseapp.com",
    projectId: "ksiu-alimpieva",
    storageBucket: "ksiu-alimpieva.appspot.com",
    messagingSenderId: "485654738885",
    appId: "1:485654738885:web:a0c1b95545b4534453bdac",
    measurementId: "G-6DGKRTNL70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();