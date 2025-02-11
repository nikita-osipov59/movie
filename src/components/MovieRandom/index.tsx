import { Play, RefreshCcw } from "lucide-react";

import { useGetMutationRandomMovie, useGetQueryRandomMovie } from "@/hooks";

import { ROUTER_PATH } from "@/router/PATH";

import { BorderPanel, Button, LinkBtn } from "@/components/ui";

import style from "./style.module.scss";

export const MovieRandom = () => {
  const { data, isLoading, isError } = useGetQueryRandomMovie();
  const { mutate, isPending } = useGetMutationRandomMovie();

  if (isLoading || isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Увы, мы ничего не нашли</div>;
  }

  return (
    <>
      {data && (
        <BorderPanel title="Random Query">
          <div className={style.box}>
            <div className={style.content}>
              <img className={style.logo} src={data.logo.url} alt={data.name} />
              <p className={style.title}>{data.name}</p>
              <div className={style.description}>
                <img className={style.imdb} src="/imdb.png" alt="imdb" />
                {data.rating.imdb}⭐<p>{data.year}</p>
                <ul className={style.countryList}>
                  {data.countries.slice(0, 4).map((item, index) => {
                    return (
                      <li key={index}>{(index ? ", " : "") + item.name}</li>
                    );
                  })}
                </ul>
              </div>
              <div className={style.buttonBox}>
                <LinkBtn
                  to={ROUTER_PATH.MOVIE + `/${data.id}`}
                  variant="primary"
                >
                  <Play />
                </LinkBtn>
                <Button onClick={() => mutate()} variant="primary">
                  <RefreshCcw />
                </Button>
              </div>
            </div>
            <div
              className={style.poster}
              style={{ backgroundImage: `url(${data.backdrop.url})` }}
            />
          </div>
        </BorderPanel>
      )}
    </>
  );
};
