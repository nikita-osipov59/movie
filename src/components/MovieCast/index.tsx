import { useParams } from "react-router-dom";

import { BorderPanel } from "@/components/ui";

import { useGetQueryMovieById } from "@/hooks";

import style from "./style.module.scss";

export const MovieCast = () => {
  const { id } = useParams();

  const { data } = useGetQueryMovieById(id!);

  return (
    <BorderPanel title="Cast">
      <div className="overflowAuto">
        <ul className={style.castList}>
          {data?.persons.map((item, index) => {
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
      </div>
    </BorderPanel>
  );
};
