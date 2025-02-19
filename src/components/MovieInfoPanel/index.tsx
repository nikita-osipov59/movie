import { useParams } from "react-router-dom";
import style from "./style.module.scss";

import { useGetQueryMovieById } from "@/hooks";

export const MovieInfoPanel = () => {
  const { id } = useParams();

  const { data } = useGetQueryMovieById(id!);

  return (
    <div className={style.box}>
      <ul>
        <p className={style.title}>Released Year</p>
        <li>{data?.year}</li>
      </ul>
      <ul>
        <p className={style.title}>Genres</p>
        <div className={style.genres}>
          {data?.genres.map((item, index) => (
            <li className={style.listItem} key={index}>
              {item.name}
            </li>
          ))}
        </div>
      </ul>
      <ul>
        <p className={style.title}>Ratings</p>
        <div className={style.genres}>
          {data &&
            // TODO: Добавить проверку на null и value > 0
            Object.entries(data?.rating).map(([key, value]) => (
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
          {data?.countries.map((item, index) => (
            <li className={style.listItem} key={index}>
              {item.name}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
