import { Link } from "react-router-dom";
import { Film } from "lucide-react";

import { ROUTER_PATH } from "@/router/PATH";

import style from "./style.module.scss";

export const Logo = () => {
  return (
    <Link className={style.logo} to={ROUTER_PATH.HOME}>
      <Film size={32} />
      <div>IMovie</div>
    </Link>
  );
};
