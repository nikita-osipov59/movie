import { useEffect } from "react";

import { getRandomStore } from "@/store";

import { ROUTER_PATH } from "@/router/PATH";

import { BorderPanel, Button, LinkBtn } from "@/components/ui";

import { Play, Refresh } from "@/components/ui/svg";

import style from "./style.module.scss";

export const MovieRandom = () => {
  const { randomFilm, getRandomFilm } = getRandomStore();

  useEffect(() => {
    if (!randomFilm) {
      getRandomFilm();
    }
  }, []);
  return (
    <>
      {randomFilm && (
        <BorderPanel title="Random Query">
          <div className={style.box}>
            <div className={style.content}>
              <img
                className={style.logo}
                src={randomFilm.logo.url}
                alt={randomFilm.name}
              />
              <p className={style.title}>{randomFilm.name}</p>
              <div className={style.description}>
                <img className={style.imdb} src="/imdb.png" alt="imdb" />
                {randomFilm.rating.imdb}⭐<p>{randomFilm.year}</p>
                <ul className={style.countryList}>
                  {randomFilm.countries.slice(0, 4).map((item, index) => {
                    return (
                      <li key={index}>{(index ? ", " : "") + item.name}</li>
                    );
                  })}
                </ul>
              </div>
              <div className={style.buttonBox}>
                <LinkBtn to={ROUTER_PATH.MOVIE + `/${randomFilm.id}`}>
                  <Play size={22} text="Watch" />
                </LinkBtn>
                <Button onClick={getRandomFilm}>
                  <Refresh size={22} />
                </Button>
              </div>
            </div>
            <div
              className={style.poster}
              style={{ backgroundImage: `url(${randomFilm.backdrop.url})` }}
            />
          </div>
        </BorderPanel>
      )}
    </>
  );
};
