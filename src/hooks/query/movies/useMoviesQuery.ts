import { useQuery } from "@tanstack/react-query";
import { clientApi } from "../../../services/api";

type UseMoviesQueryParams = {
  search: string;
};

export const useMoviesQuery = ({ search }: UseMoviesQueryParams) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", search],
    queryFn: async () => {
      const response = await clientApi.get(
        `/?s=${search}&apikey=${import.meta.env.VITE_API_KEY}`,
      );

      return response.data;
    },
  });

  return { data, isLoading, isError };
};
