import { Link } from "react-router-dom";

import { getAuthStore } from "@/store";

import { User } from "@/components/ui/svg";

import { ROUTER_PATH } from "@/router/PATH";

import style from "./style.module.scss";

export const UserPanel = () => {
  const { name, email } = getAuthStore();

  return (
    <div>
      <Link to={ROUTER_PATH.PROFILE} className={style.user}>
        {name ? (
          <img
            className={style.avatar}
            src="https://i.pinimg.com/originals/24/ac/ef/24acef8b3a6a45d7239480bcc4ff0193.jpg"
            alt={name}
          />
        ) : (
          <User size={32} />
        )}
        <div>{name ? name : email}</div>
      </Link>
    </div>
  );
};
