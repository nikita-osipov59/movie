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
      <Button onClick={switchTheme} styled={false} width="100%">
        <Theme size={22} text="Theme" />
      </Button>
      <Button onClick={handleSignOut} styled={false} width="100%">
        <LogOut size={22} text="Log Out" />
      </Button>
    </div>
  );
};
