import { Route, Routes } from "react-router-dom";

import { ROUTER_PATH } from "@/router/PATH/";

import { HomePage, MoviePage, NotFoundPage, SearchPage } from "@/pages";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTER_PATH.HOME} element={<HomePage />} />
      <Route path={ROUTER_PATH.MOVIE + `/:id`} element={<MoviePage />} />
      <Route path={ROUTER_PATH.SEARCH} element={<SearchPage />} />
      <Route path={ROUTER_PATH.NOTFOUNDPAGE} element={<NotFoundPage />} />
    </Routes>
  );
};
