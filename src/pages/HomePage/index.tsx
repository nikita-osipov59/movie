import { AsidePanel, BorderPanel, Container, Search } from "@/components/ui";
import { MovieRandom } from "@/components";

import style from "./style.module.scss";

export const HomePage = () => {
  return (
    <section>
      <Container>
        <div className={style.wrapper}>
          <AsidePanel />
          <div className={style.box}>
            <Search />
            <BorderPanel>
              <MovieRandom />
            </BorderPanel>
          </div>
        </div>
      </Container>
    </section>
  );
};
