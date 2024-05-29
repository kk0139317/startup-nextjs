// services/firebaseAuth.js
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";

// Check if Firebase app is already initialized
if (typeof window !== "undefined" && !firebase.apps.length) {
    // Initialize Firebase app with configuration
    firebase.initializeApp(firebaseConfig);
}

export const signInWithGitHub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
        await firebase.auth().signInWithPopup(provider);
    } catch (error) {
        console.error("GitHub sign-in error:", error.message);
    }
};

export const signOut = async () => {
    try {
        await firebase.auth().signOut();
    } catch (error) {
        console.error("Sign out error:", error.message);
    }
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
};
