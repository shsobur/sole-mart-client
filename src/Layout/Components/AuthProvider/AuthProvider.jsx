import PropTypes from "prop-types";
import auth from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // Sign Up aip__ __!
  const signUpUser = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
  };

  // Sign In aip__ __!
  const signInUser = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  };

  // Google sign in api__ __!
  const googleSigninUser = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  };

  // User logOut api__ __!
  const logOut = () => {
    return signOut(auth);
  };

  // Handleing current loged in user__ __!
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const userEmail = { email: currentUser.email };

      if (currentUser) {
        axiosSecure.post("/jwt", userEmail).then((res) => {
          console.log(res.data);
        });
      } else {
        axiosSecure.post("/logout").then(() => {});
      }

      setLoading(false);
    });
    return () => {
      unSubcribe();
    };
  }, [axiosSecure]);

  const authInfo = {
    user,
    loading,
    signUpUser,
    signInUser,
    googleSigninUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
