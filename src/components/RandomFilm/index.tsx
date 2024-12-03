import { useEffect } from "react";

import { getRandomStore } from "@/store";

import { Play } from "@/components/ui/svg";

import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/router/PATH";

export const RandomFilm = () => {
  const { randomFilm, getRandomFilm } = getRandomStore();

  console.log(randomFilm);
  useEffect(() => {
    getRandomFilm();
  }, []);
  return (
    <>
      {randomFilm && (
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
                  return <li key={index}>{(index ? ", " : "") + item.name}</li>;
                })}
              </ul>
            </div>
            <Link
              to={ROUTER_PATH.MOVIE + `/${randomFilm.id}`}
              className={style.button}
            >
              <Play size={22} text="Watch" />
            </Link>
          </div>
          <div>
            <img
              className={style.poster}
              src={randomFilm.poster.url}
              alt={randomFilm.name}
            />
          </div>
        </div>
      )}
    </>
  );
};
