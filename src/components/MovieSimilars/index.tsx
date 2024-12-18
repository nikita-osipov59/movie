import { getFilmByIdStore } from "@/store";
import { BorderPanel } from "@/components/ui";

import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/router/PATH";

export const MovieSimilars = () => {
  const { filmById } = getFilmByIdStore();

  return (
    <>
      <BorderPanel title="Similar movies">
        <div className="overflowAuto">
          <ul className={style.similarList}>
            {filmById?.similarMovies?.map((item) => (
              <li key={item.id}>
                <Link
                  className={style.similarItem}
                  to={ROUTER_PATH.MOVIE + `/${item.id}`}
                >
                  <img
                    className={style.poster}
                    src={item.poster.url}
                    alt={item.name}
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </BorderPanel>
    </>
  );
};
