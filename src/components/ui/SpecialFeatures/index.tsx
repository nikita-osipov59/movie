import { LogOut, SwitchTheme } from "@/components/ui";

import style from "./style.module.scss";

export const SpecialFeatures = () => {
  return (
    <div className={style.box}>
      <SwitchTheme />
      <LogOut />
    </div>
  );
};
