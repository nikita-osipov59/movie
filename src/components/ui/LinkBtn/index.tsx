import { Link } from "react-router-dom";

import { BtnLinkProps } from "./BtnLinkProps.props";

import style from "./style.module.scss";

export const LinkBtn: React.FC<BtnLinkProps> = ({ children, to, variant }) => {
  return (
    <Link className={style[`${variant}`]} to={to}>
      {children}
    </Link>
  );
};
