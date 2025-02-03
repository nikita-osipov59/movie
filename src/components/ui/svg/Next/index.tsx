import { svgSize } from "@/utils/interfaces";

import style from "./style.module.scss";

export const Next = ({ text, size = 22 }: svgSize) => {
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
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
      {text}
    </div>
  );
};
