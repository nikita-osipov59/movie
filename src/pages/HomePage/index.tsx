import { RandomFilm } from "@/components";
import { AsidePanel, Container } from "@/components/ui";

import style from "./style.module.scss";

export const HomePage = () => {
  return (
    <section>
      <Container>
        <div className={style.wrapper}>
          <AsidePanel />
          <div className={style.box}>
            <RandomFilm />
          </div>
        </div>
      </Container>
    </section>
  );
};
