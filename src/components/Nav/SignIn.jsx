import React from 'react';
import { auth, googleProvider } from '../../../firebaseConfig.js';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const signInWithGoogle = async () => {
        try {
        await signInWithPopup(auth, googleProvider);
        console.log('Google Sign-In successful');
        } catch (error) {
        console.error('Error with Google Sign-In', error);
        }
    };

    const signInWithEmail = async (email, password) => {
        try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Email Sign-In successful');
        } catch (error) {
        console.error('Error with Email Sign-In', error);
        }
    };

    return (
        <div>
        <p>Sign in:</p>
        <button onClick={signInWithGoogle}>with Google</button>
        
        {/* 
            Для демонстрації використовується статичний імейл і пароль.
            На практиці це може бути форма, де користувач вводить свої дані.
        */}
        <button onClick={() => signInWithEmail('test@example.com', 'password123')}>with Email</button>
        </div>
    );
    };

export default SignIn;
