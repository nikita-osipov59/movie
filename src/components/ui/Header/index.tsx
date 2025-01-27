import { ROUTER_PATH } from "@/router/PATH";

import { Home } from "@/components/ui/svg";

import { NavLinkBtn } from "@/components/ui/NavLinkBtn";

import style from "./style.module.scss";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLinkBtn to={ROUTER_PATH.HOME} variant="default">
              <Home size={22} text="Home" />
            </NavLinkBtn>
          </li>
        </ul>
      </nav>
    </header>
  );
};
