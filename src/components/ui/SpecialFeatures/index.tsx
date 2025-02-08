import { LogOutIcon, SunMoon } from "lucide-react";

import { themeStore } from "@/store";

import { AuthService } from "@/services";

import { Button } from "@/components/ui";

import style from "./style.module.scss";

export const SpecialFeatures = () => {
  const { handleSignOut } = AuthService();

  const { switchTheme } = themeStore();

  return (
    <div className={style.box}>
      <Button onClick={switchTheme} variant="default">
        <div className={style.text}>
          <SunMoon size={22} />
          Theme
        </div>
      </Button>
      <Button onClick={handleSignOut} variant="default">
        <div className={style.text}>
          <LogOutIcon size={22} />
          LogOut
        </div>
      </Button>
    </div>
  );
};
