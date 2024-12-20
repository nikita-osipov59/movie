import { create } from "zustand";
import { persist } from "zustand/middleware";

import { apiBase } from "@/api/config";

interface Country {
  name: string;
}

interface State {
  getRandomFilm: () => Promise<void>;
  randomFilm: {
    id: number;
    name: string;
    logo: { url: string };
    backdrop: { url: string };
    url: string;
    rating: { imdb: number };
    year: number;
    poster: { url: string };
    countries: Country[];
  } | null;
}

export const getRandomStore = create<State>()(
  persist(
    (set) => ({
      randomFilm: null,
      getRandomFilm: async () => {
        try {
          const response = await apiBase.get(
            `movie/random?notNullFields=logo.url&notNullFields=votes.imdb&notNullFields=ageRating&notNullFields=countries.name`
          );

          set(() => ({ randomFilm: response.data }));
        } catch (error) {
          console.error("Error fetching history:", error);
        }
      },
    }),
    { name: "randomFilm" }
  )
);
