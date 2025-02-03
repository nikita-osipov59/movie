import { LogOut, Theme } from "@/components/ui/svg";

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
        <Theme text="Theme" />
      </Button>
      <Button onClick={handleSignOut} variant="default">
        <LogOut text="Log Out" />
      </Button>
    </div>
  );
};
