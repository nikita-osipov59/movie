import { BorderPanel } from "@/components/ui";

import { getFilmByIdStore } from "@/store";

import style from "./style.module.scss";

export const MovieCast = () => {
  const { filmById } = getFilmByIdStore();

  return (
    <>
      <BorderPanel title="Cast">
        <ul className={style.castList}>
          {filmById?.persons.map((item, index) => {
            return (
              <li className={style.castItem} key={index}>
                <img
                  className={style.photo}
                  src={item?.photo}
                  alt={item?.name}
                />
                <p className={style.role}>
                  {item.description ? item.description : item.profession}
                </p>
                <h3>{item.name}</h3>
              </li>
            );
          })}
        </ul>
      </BorderPanel>
    </>
  );
};
