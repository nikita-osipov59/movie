import { AsidePanel, Container } from "@/components/ui";

import { Registration } from "@/components/Registration";

import style from "./style.module.scss";

export const RegistrationPage = () => {
  return (
    <section>
      <Container>
        <AsidePanel />
        <div className={style.box}>
          <Registration />
        </div>
      </Container>
    </section>
  );
};
