import { create } from "zustand";

interface State {
  switchTheme: () => void;
  theme: string;
}

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "dark";
};

export const themeStore = create<State>((set) => ({
  theme: getInitialTheme(),
  switchTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));
