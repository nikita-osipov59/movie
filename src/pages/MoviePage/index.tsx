import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getFilmByIdStore } from "@/store";

import { FilmInfoPanel } from "@/components/";
import { AsidePanel, Container, BorderPanel } from "@/components/ui";

import style from "./style.module.scss";

export const MoviePage = () => {
  const { filmById, getFilmById } = getFilmByIdStore();

  const { id } = useParams<{ id: string }>();
  console.log(filmById);
  useEffect(() => {
    if (id) {
      getFilmById(id);
    }
  }, [id]);

  return (
    <section>
      <Container>
        <div className={style.wrapper}>
          <AsidePanel />
          <div className={style.box}>
            <div className={style.top}>
              <img
                className={style.backdrop}
                src={filmById?.backdrop.url}
                alt={filmById?.name}
              />
              <p className={style.title}>{filmById?.name}</p>
            </div>
            <div className={style.test}>
              <BorderPanel title="Description">
                {filmById?.description}
              </BorderPanel>
              <FilmInfoPanel />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
