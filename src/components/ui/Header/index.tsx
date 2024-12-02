import { NavLink } from "react-router-dom";

import { ROUTER_PATH } from "@/router/PATH";

import { Home } from "@/components/ui/svg";

import style from "./style.module.scss";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink to={ROUTER_PATH.HOME}>
              <Home size={22} text="Home" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
