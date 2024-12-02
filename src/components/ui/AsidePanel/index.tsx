import { Header, SpecialFeatures } from "@/components/ui";
import { Logo } from "@/components/ui/svg";

import style from "./style.module.scss";

export const AsidePanel = () => {
  return (
    <aside className={style.aside}>
      <Logo size={32} text="Movie" />
      <Header />
      <SpecialFeatures />
    </aside>
  );
};
