import { Home } from "lucide-react";

import { ROUTER_PATH } from "@/router/PATH";

import { NavLinkBtn } from "@/components/ui";

import style from "./style.module.scss";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLinkBtn to={ROUTER_PATH.HOME} variant="default">
              <div className={style.item}>
                <Home size={22} />
                <div className={style.dots}>Home</div>
              </div>
            </NavLinkBtn>
          </li>
        </ul>
      </nav>
    </header>
  );
};
