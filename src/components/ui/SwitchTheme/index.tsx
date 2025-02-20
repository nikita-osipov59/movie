import { SunMoon } from "lucide-react";

import { Button } from "@/components/ui";

import { themeStore } from "@/store";

import style from "./style.module.scss";

export const SwitchTheme = () => {
  const { switchTheme } = themeStore();

  return (
    <Button onClick={switchTheme} variant="default">
      <div className={style.text}>
        <SunMoon size={22} />
        Theme
      </div>
    </Button>
  );
};
