import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { ROUTER_PATH } from "@/router/PATH";

import { getAuthStore } from "@/store";

export const useIdentification = () => {
  const navigate = useNavigate();

  const { setUser } = getAuthStore();

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        setUser({
          email: user.email!,
          id: user.uid,
        });
        navigate(ROUTER_PATH.HOME);
      })
      .catch((err) => {
        console.log(err.message);
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
      .catch((err) => {
        console.log(err.message);
      });
  };
  return { handleRegistration, handleLogin };
};

//  TODO: как-то оптимизировать бы
