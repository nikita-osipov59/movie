import { AsidePanel, Container } from "@/components/ui";
import { MovieRandom } from "@/components";

import style from "./style.module.scss";

export const HomePage = () => {
  return (
    <section>
      <Container>
        <div className={style.wrapper}>
          <AsidePanel />
          <div className={style.box}>
            <MovieRandom />
          </div>
        </div>
      </Container>
    </section>
  );
};
