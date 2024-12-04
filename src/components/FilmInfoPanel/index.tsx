import style from "./style.module.scss";

import { getFilmByIdStore } from "@/store";

export const FilmInfoPanel = () => {
  const { filmById } = getFilmByIdStore();

  return (
    <div className={style.box}>
      <ul>
        <p className={style.title}>Released Year</p>
        <li>{filmById?.year}</li>
      </ul>
      <ul>
        <p className={style.title}>Genres</p>
        <div className={style.genres}>
          {filmById?.genres.map((item, index) => (
            <li className={style.listItem} key={index}>
              {item.name}
            </li>
          ))}
        </div>
      </ul>
      <ul>
        <p className={style.title}>Ratings</p>
        <div className={style.genres}>
          {filmById &&
            // TODO: Добавить проверку на null и value > 0
            Object.entries(filmById?.rating).map(([key, value]) => (
              <li className={style.listItem} key={key}>
                {key}
                <span>{`${value}⭐`}</span>
              </li>
            ))}
        </div>
      </ul>
      <ul>
        <p className={style.title}>Countries</p>
        <div className={style.genres}>
          {filmById?.countries.map((item, index) => (
            <li className={style.listItem} key={index}>
              {item.name}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
