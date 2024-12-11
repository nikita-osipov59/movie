import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Form } from "@/components/ui";

import { auth } from "@/firebase";

import { getAuthStore } from "@/store";

import { ROUTER_PATH } from "@/router/PATH";

export const Auth = () => {
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
      .catch(console.error);
  };
  return <Form handleClick={handleLogin} />;
};
