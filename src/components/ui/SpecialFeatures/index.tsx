import { LogOut, Theme } from "@/components/ui/svg";

import style from "./style.module.scss";

export const SpecialFeatures = () => {
  return (
    <div className={style.box}>
      <button>
        <Theme size={22} text="Theme" />
      </button>
      <button>
        <LogOut size={22} text="Log Out" />
      </button>
    </div>
  );
};
