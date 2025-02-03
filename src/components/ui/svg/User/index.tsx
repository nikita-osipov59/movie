import { svgSize } from "@/utils/interfaces";

import style from "./style.module.scss";

export const User = ({ text, size = 22 }: svgSize) => {
  return (
    <div className={style.box}>
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
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
      {text}
    </div>
  );
};
