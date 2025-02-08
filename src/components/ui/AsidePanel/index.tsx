import { Header, Logo, SpecialFeatures } from "@/components/ui";

import style from "./style.module.scss";

export const AsidePanel = () => {
  return (
    <aside className={style.aside}>
      <Logo />
      <Header />
      <SpecialFeatures />
    </aside>
  );
};
