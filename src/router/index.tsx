import { Route, Routes } from "react-router-dom";

import { ROUTER_PATH } from "@/router/PATH/";

import {
  AuthPage,
  HomePage,
  MoviePage,
  NotFoundPage,
  RegistrationPage,
  SearchPage,
} from "@/pages";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTER_PATH.HOME} element={<HomePage />} />
        <Route path={ROUTER_PATH.MOVIE + `/:id`} element={<MoviePage />} />
        <Route path={ROUTER_PATH.SEARCH} element={<SearchPage />} />
      </Route>
      <Route path={ROUTER_PATH.REGISTRATION} element={<RegistrationPage />} />
      <Route path={ROUTER_PATH.AUTH} element={<AuthPage />} />
      <Route path={ROUTER_PATH.NOTFOUNDPAGE} element={<NotFoundPage />} />
    </Routes>
  );
};
