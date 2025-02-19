import { Link } from "react-router-dom";

import { ROUTER_PATH } from "@/router/PATH";

import { DataDocs } from "@/store";

import style from "./style.module.scss";

interface ListProps {
  data: DataDocs;
}

export const List: React.FC<ListProps> = ({ data }) => {
  return (
    <>
      {data && data.docs?.length > 0 && (
        <ul className={style.list}>
          {data.docs.map((item) => (
            <li key={item.id}>
              <Link
                className={style.item}
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
      )}
    </>
  );
};
