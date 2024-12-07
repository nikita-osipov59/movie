import style from "./style.module.scss";

interface BorderPanelProps {
  children?: React.ReactNode;
  title?: string;
}

export const BorderPanel = ({ children, title }: BorderPanelProps) => {
  return (
    <div className={style.box}>
      {title && <p className={style.title}>{title}</p>}
      {children && <div className={style.text}>{children}</div>}
    </div>
  );
};
