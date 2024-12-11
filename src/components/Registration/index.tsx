import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { Form } from "@/components/ui";

import { auth } from "@/firebase";

import { getAuthStore } from "@/store";

import { ROUTER_PATH } from "@/router/PATH";

export const Registration = () => {
  const navigate = useNavigate();
  const { setUser } = getAuthStore();

  const handleRegistration = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        setUser({
          email: user.email!,
          id: user.uid,
        });
        navigate(ROUTER_PATH.AUTH);
      })
      .catch(console.error);
  };

  return <Form handleClick={handleRegistration} />;
};
