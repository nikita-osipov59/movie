import { AsidePanel, Container } from "@/components/ui";

import style from "./style.module.scss";

export const HomePage = () => {
  return (
    <section>
      <Container>
        <div className={style.wrapper}>
          <AsidePanel />
          <div className={style.box}>
            <div>preview</div>
          </div>
        </div>
      </Container>
    </section>
  );
};
