import { LogOut, Theme } from "@/components/ui/svg";

import { themeStore } from "@/store";

import { AuthService } from "@/services";

import style from "./style.module.scss";

export const SpecialFeatures = () => {
  const { handleSignOut } = AuthService();

  const { switchTheme } = themeStore();

  return (
    <div className={style.box}>
      <button onClick={switchTheme}>
        <Theme size={22} text="Theme" />
      </button>
      <button onClick={handleSignOut}>
        <LogOut size={22} text="Log Out" />
      </button>
    </div>
  );
};
