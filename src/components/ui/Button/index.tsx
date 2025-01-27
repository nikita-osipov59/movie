import { BtnProps } from "./Button.props";

import style from "./style.module.scss";

export const Button: React.FC<BtnProps> = ({
  children,
  type = "button",
  width,
  variant,
  onClick,
}) => {
  return (
    <button
      className={style[`${variant}`]}
      onClick={onClick}
      type={type}
      style={{ width: width }}
    >
      {children}
    </button>
  );
};
