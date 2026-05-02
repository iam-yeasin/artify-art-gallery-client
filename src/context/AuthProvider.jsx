import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false),
    );
  };

  const updateUser = (updatedUser) => {
    setUser({ ...updatedUser });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    // console.log("NAVBAR:", { user, loading });
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false),
    );
  };

  const signInWithGoogle = () => {
    setLoading(true);

    // const provider = new GoogleAuthProvider();
    GoogleProvider.setCustomParameters({
      prompt: "select_account",
    });

    return signInWithPopup(auth, GoogleProvider).finally(() =>
      setLoading(false),
    );
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    updateUser,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
