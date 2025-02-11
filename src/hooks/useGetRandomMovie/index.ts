import { useMutation, useQuery } from "@tanstack/react-query";

import { getRandomStore } from "@/store";

import { queryClient } from "@/api/query-client";

export const useGetQueryRandomMovie = () => {
  const { getRandomMovie } = getRandomStore();

  return useQuery({
    queryKey: ["randomMovie"],
    queryFn: () => getRandomMovie(),
    refetchOnWindowFocus: false,
  });
};

export const useGetMutationRandomMovie = () => {
  const { getRandomMovie } = getRandomStore();

  return useMutation({
    mutationKey: ["randomMovie"],
    mutationFn: () => getRandomMovie(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["randomMovie"],
      });
    },
  });
};
