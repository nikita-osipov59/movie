import { LogOut, Theme } from "@/components/ui/svg";

import { getAuthStore, themeStore } from "@/store";

import style from "./style.module.scss";

export const SpecialFeatures = () => {
  const { switchTheme } = themeStore();
  const { removeUser } = getAuthStore();

  return (
    <div className={style.box}>
      <button onClick={switchTheme}>
        <Theme size={22} text="Theme" />
      </button>
      <button onClick={removeUser}>
        <LogOut size={22} text="Log Out" />
      </button>
    </div>
  );
};
