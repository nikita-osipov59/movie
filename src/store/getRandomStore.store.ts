import { create } from "zustand";

import { apiBase } from "@/api/config";

interface Country {
  name: string;
}

interface State {
  getRandomFilm: () => Promise<void>;
  randomFilm: {
    name: string;
    logo: { url: string };
    url: string;
    rating: { imdb: number };
    year: number;
    poster: { url: string };
    countries: Country[];
  } | null;
}

export const getRandomStore = create<State>((set) => ({
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
}));
