import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { ROUTER_PATH } from "@/router/PATH";

import { getAuthStore } from "@/store";

export const AuthService = () => {
  const navigate = useNavigate();

  // const user = auth.currentUser;

  const { setUser, removeUser } = getAuthStore();

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          email: user.email!,
          id: user.uid,
          name: user.displayName,
        });
        navigate(ROUTER_PATH.HOME);
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  const handleRegistration = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          email: user.email!,
          id: user.uid,
        });
        navigate(ROUTER_PATH.AUTH);
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  const handleSignOut = () => {
    signOut(auth);
    removeUser();
    console.log("Выход");
  };

  return {
    handleRegistration,
    handleLogin,
    handleSignOut,
  };
};

//  TODO: как-то оптимизировать бы
