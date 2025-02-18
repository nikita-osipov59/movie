import { getFilmByIdStore } from "@/store";
import { useQuery } from "@tanstack/react-query";

export const useGetQueryMovieById = (id: string) => {
  const { getMovieById } = getFilmByIdStore();

  return useQuery({
    queryKey: ["movieById", id],
    queryFn: () => getMovieById(id),
    refetchOnWindowFocus: false,
  });
};
