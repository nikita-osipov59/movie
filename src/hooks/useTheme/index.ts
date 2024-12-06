import { themeStore } from "@/store";
import { useEffect } from "react";

export const useTheme = () => {
  const { theme } = themeStore();

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, [theme]);

  return { theme };
};
