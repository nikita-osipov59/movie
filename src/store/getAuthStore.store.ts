import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  setUser: (value: { id: string; email: string; name?: string | null }) => void;
  setEmail: (email: string) => void;
  removeUser: () => void;
  isAuth: boolean;
  email: string;
  id: string | null;
  name: string | null;
}

const clearStorage = () => {
  localStorage.removeItem("user");
};

export const getAuthStore = create<User>()(
  persist(
    (set) => ({
      isAuth: false,
      email: "",
      id: null,
      name: null,
      setUser: ({ id, email, name }) => {
        set(() => ({ id: id, email: email, name: name }));
        set(() => ({ isAuth: true }));
      },
      setEmail: (email) => {
        set(() => ({ email: email }));
      },
      removeUser: () => {
        set(() => ({ id: null, email: "", isAuth: false }));
        clearStorage();
      },
    }),
    { name: "user" }
  )
);
