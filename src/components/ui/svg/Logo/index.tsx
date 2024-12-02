import { Link } from "react-router-dom";

import { svgSize } from "@/utils/interfaces";

import { ROUTER_PATH } from "@/router/PATH";

import style from "./style.module.scss";

export const Logo = ({ text, size }: svgSize) => {
  return (
    <Link to={ROUTER_PATH.HOME} className={style.box}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18" />
        <path d="M3 7.5h4" />
        <path d="M3 12h18" />
        <path d="M3 16.5h4" />
        <path d="M17 3v18" />
        <path d="M17 7.5h4" />
        <path d="M17 16.5h4" />
      </svg>
      {text}
    </Link>
  );
};
