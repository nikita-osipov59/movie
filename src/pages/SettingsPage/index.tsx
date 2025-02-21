import { SettingsPanel } from "@/components";
import { Outlet } from "react-router-dom";

import style from "./style.module.scss";

const SettingsPage = () => {
  return (
    <section>
      <div className={style.box}>
        <SettingsPanel />
        <Outlet />
      </div>
    </section>
  );
};

export default SettingsPage;
