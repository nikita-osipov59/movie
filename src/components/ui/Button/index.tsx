import { BtnProps } from "./Button.props";

import style from "./style.module.scss";

export const Button: React.FC<BtnProps> = ({
  children,
  type = "button",
  width,
  styled = true,
  onClick,
}) => {
  return (
    <button
      className={styled ? style.button : ""}
      onClick={onClick}
      type={type}
      style={{ width: width }}
    >
      {children}
    </button>
  );
};
