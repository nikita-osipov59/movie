import { NavLink } from "react-router-dom";

import { BtnLinkProps } from "./BtnLinkProps.props";

import style from "./style.module.scss";

export const NavLinkBtn: React.FC<BtnLinkProps> = ({
  children,
  to,
  variant,
}) => {
  return (
    <NavLink className={style[`${variant}`]} to={to}>
      {children}
    </NavLink>
  );
};
