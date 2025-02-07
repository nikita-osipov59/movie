import { useMutation, useQuery } from "@tanstack/react-query";

import { getBySearchStore } from "@/store";

import { queryClient } from "@/api/query-client";

export const useGetQueryMovieBySearch = () => {
  const { getMovieBySearch, inputValue } = getBySearchStore();
  return useQuery({
    queryKey: ["movieBySearch"],
    queryFn: () => getMovieBySearch(inputValue),
    refetchOnWindowFocus: false,
  });
};

export const useGetMutatinMovieBySearch = () => {
  const { getMovieBySearch, inputValue } = getBySearchStore();

  return useMutation({
    mutationKey: ["movieBySearch"],
    mutationFn: () => getMovieBySearch(inputValue),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movieBySearch"],
      });
    },
  });
};
