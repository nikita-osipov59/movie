import { create } from "zustand";

import { apiBase } from "@/api/config";

interface Country {
  name: string;
}

interface Genre {
  name: string;
}

interface Person {
  id: string;
  name: string;
  photo: string;
  description: string;
  profession: string;
}

interface SimilarMovie {
  id: string;
  name: string;
  poster: { url: string };
  length: number;
}

interface State {
  getFilmById: (id: string) => Promise<void>;
  filmById: {
    id: number;
    name: string;
    logo: { url: string };
    backdrop: { url: string };
    url: string;
    rating: { imdb: number };
    year: number;
    poster: { url: string };
    countries: Country[];
    description: string;
    genres: Genre[];
    persons: Person[];
    similarMovies?: SimilarMovie[];
  } | null;
}

export const getFilmByIdStore = create<State>((set) => ({
  filmById: null,
  getFilmById: async (id) => {
    try {
      const response = await apiBase.get(`movie/${id}`);

      set(() => ({ filmById: response.data }));
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  },
}));