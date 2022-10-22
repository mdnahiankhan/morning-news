import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../../firebase/firebase.config'


export const AauthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const logout = () => {
        setloading(true)
        return signOut(auth)
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setloading(false)
        });
        return () => {
            unSubcribe();
        }

    }, [])

    const authInfo = {
        user,
        providerLogin,
        logout,
        createUser,
        signIn,
        loading, updateUserProfile, verifyEmail, setloading
    };

    return (
        <AauthContext.Provider value={authInfo}>
            {children}
        </AauthContext.Provider>
    );
};

export default AuthProvider;