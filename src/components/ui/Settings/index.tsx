import { Settings2 } from "lucide-react";

import { LinkBtn } from "@/components/ui";

import { ROUTER_PATH } from "@/router/PATH";

import style from "./style.module.scss";

export const Settings = () => {
  return (
    <LinkBtn to={ROUTER_PATH.SETTINGS} variant="default">
      <div className={style.text}>
        <Settings2 />
        Settings
      </div>
    </LinkBtn>
  );
};
