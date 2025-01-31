import { Link } from "react-router-dom";

import { getAuthStore } from "@/store";

import { User } from "@/components/ui/svg";

import { ROUTER_PATH } from "@/router/PATH";

import style from "./style.module.scss";

export const UserPanel = () => {
  const { name, email, id } = getAuthStore();

  return (
    <div>
      <Link to={ROUTER_PATH.PROFILE + `/${id}`} className={style.user}>
        <User size={32} />
        <p>{name ? name : email}</p>
      </Link>
    </div>
  );
};
