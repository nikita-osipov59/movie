import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getFilmByIdStore } from "@/store";

import { MovieInfo } from "@/components/";

const MoviePage = () => {
  const { filmById, getFilmById } = getFilmByIdStore();

  const { id } = useParams<{ id: string }>();
  console.log(filmById);
  useEffect(() => {
    if (id) {
      getFilmById(id);
    }
  }, [id]);
  return (
    <section>
      <MovieInfo />
    </section>
  );
};

export default MoviePage;
