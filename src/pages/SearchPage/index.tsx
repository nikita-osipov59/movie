import {
  AsidePanel,
  BorderPanel,
  Container,
  List,
  Search,
} from "@/components/ui";

import { getBySearchStore } from "@/store";

import style from "./style.module.scss";

export const SearchPage = () => {
  const { data } = getBySearchStore();

  return (
    <section>
      <Container>
        <div className={style.wrapper}>
          <AsidePanel />
          <div className={style.box}>
            <Search />
            <BorderPanel title="Query">
              <List data={data} />
            </BorderPanel>
          </div>
        </div>
      </Container>
    </section>
  );
};
