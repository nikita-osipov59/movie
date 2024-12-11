import { AsidePanel, Container } from "@/components/ui";

import { Auth } from "@/components";

import style from "./style.module.scss";

export const AuthPage = () => {
  return (
    <section>
      <Container>
        <AsidePanel />
        <div className={style.box}>
          <Auth />
        </div>
      </Container>
    </section>
  );
};
