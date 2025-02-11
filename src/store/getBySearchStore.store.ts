import { create } from "zustand";

import { apiBase } from "@/api/config";
import { persist } from "zustand/middleware";

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

interface Movie {
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
}

export interface Data {
  docs: Movie[];
}

export interface State {
  getMovieBySearch: (value: string) => Promise<void>;
  setInputValue: (value: string) => void;
  inputValue: string;
  data: Data[] | null;
}

export const getBySearchStore = create<State>()(
  persist(
    (set) => ({
      data: null,
      inputValue: "",
      getMovieBySearch: async (value) => {
        try {
          const response = await apiBase.get(
            `movie/search?page=1&limit=10&query=${value}`
          );
          set(() => ({ data: response.data }));
          return response.data;
        } catch (error) {
          console.error("Error fetching history:", error);
        }
      },
      setInputValue: (value) => set(() => ({ inputValue: value })),
    }),
    { name: "Search" }
  )
);
