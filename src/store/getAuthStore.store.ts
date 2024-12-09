import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  setUser: (value: { id: string; email: string }) => void;
  setEmail: (email: string) => void;
  removeUser: () => void;
  isAuth: boolean;
  email: string;
  id: string | null;
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
      setUser: ({ id, email }) => {
        set(() => ({ id: id, email: email }));
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
