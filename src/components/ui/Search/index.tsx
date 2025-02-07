import { useNavigate } from "react-router-dom";

import { getBySearchStore } from "@/store";

import { useGetMutatinMovieBySearch } from "@/hooks";

import { ROUTER_PATH } from "@/router/PATH";

import { Next } from "@/components/ui/svg";

import style from "./style.module.scss";

export const Search = () => {
  const { inputValue, setInputValue } = getBySearchStore();
  const { mutate } = useGetMutatinMovieBySearch();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      navigate(ROUTER_PATH.SEARCH);
      mutate();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        className={style.search}
        type="search"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={style.submit} type="submit">
        <Next />
      </button>
    </form>
  );
};
