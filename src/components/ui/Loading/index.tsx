import Loader from "react-ts-loaders";

import { LoadingProps } from "./Loading.props";

import style from "./style.module.scss";

export const Loading = ({
  color = "#f50",
  size = 100,
  type = "spinner",
}: LoadingProps) => {
  return (
    <Loader className={style.loader} color={color} type={type} size={size} />
  );
};
