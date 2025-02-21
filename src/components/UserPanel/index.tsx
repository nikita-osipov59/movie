import { Link } from "react-router-dom";

import { getAuthStore } from "@/store";

import { CircleUserRound } from "lucide-react";

import { ROUTER_PATH } from "@/router/PATH";

import { UserPanelProps } from "./UserPanel.props";

import style from "./style.module.scss";

export const UserPanel: React.FC<UserPanelProps> = ({ type }) => {
  const { name, email, photoURL, id } = getAuthStore();

  return (
    <div className={style.userPanel}>
      {type === "link" && (
        <Link to={ROUTER_PATH.PROFILE + `/${id}`} className={style.user}>
          {photoURL ? (
            <img className={style.avatar} src={photoURL} alt="avatar" />
          ) : (
            <CircleUserRound size={32} />
          )}
          <p>{name ? name : email}</p>
        </Link>
      )}
      {type === "button" && (
        <button className={style.user}>
          {photoURL ? (
            <img className={style.avatar} src={photoURL} alt="avatar" />
          ) : (
            <CircleUserRound size={32} />
          )}
          <p>{name ? name : email}</p>
        </button>
      )}
    </div>
  );
};
