import { Settings2 } from "lucide-react";

import { LinkBtn } from "@/components/ui";

import style from "./style.module.scss";

export const Settings = () => {
  return (
    <LinkBtn to="#" variant="default">
      <div className={style.text}>
        <Settings2 />
        Settings
      </div>
    </LinkBtn>
  );
};
