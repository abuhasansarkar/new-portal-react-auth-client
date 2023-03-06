import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // const user = {displayName: 'Abu Hasan'};
  const [user, setUser] = useState(null);
  // Loading State
  const [loading, setLoading] = useState(true);
  // User Create
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User SingIn
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Google Login
  const googleLoginProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // useEffect outsite contact
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user insite state changes", currentUser);

      setUser(currentUser);

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Update Profile
  const upDateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // Mail verification
  const emailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // SingOut
  const userSingOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const AuthInfo = {
    user,
    loading,
    upDateUserProfile,
    googleLoginProvider,
    createUser,
    singInUser,
    userSingOut,
    emailVerify,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
