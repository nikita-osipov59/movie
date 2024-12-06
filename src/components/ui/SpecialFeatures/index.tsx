import { LogOut, Theme } from "@/components/ui/svg";

import style from "./style.module.scss";
import { themeStore } from "@/store";

export const SpecialFeatures = () => {
  const { switchTheme } = themeStore();

  return (
    <div className={style.box}>
      <button onClick={switchTheme}>
        <Theme size={22} text="Theme" />
      </button>
      <button>
        <LogOut size={22} text="Log Out" />
      </button>
    </div>
  );
};
