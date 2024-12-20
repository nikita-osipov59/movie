import { Link } from "react-router-dom";

import { BtnLinkProps } from "./Link.props";

import style from "./style.module.scss";

export const LinkBtn: React.FC<BtnLinkProps> = ({ children, to }) => {
  return (
    <Link className={style.link} to={to}>
      {children}
    </Link>
  );
};
