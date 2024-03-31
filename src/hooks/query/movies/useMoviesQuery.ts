import { useQuery } from "@tanstack/react-query";
import { clientApi } from "../../../services/api";
import MovieMapper from "../../../services/mappers/MovieMapper";
import { MoviePersistence } from "../../../types/Movie";

type ResponseAPI = {
  Search: MoviePersistence[];
};

type UseMoviesQueryParams = {
  search?: string;
  pageParam?: number;
};

export const useMoviesQuery = ({
  search = "terror",
  pageParam,
}: UseMoviesQueryParams) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", search, pageParam],
    queryFn: async () => {
      const response = await clientApi.get<ResponseAPI>(
        `/?s=${search ?? "terror"}&page=${pageParam ?? 1}&limit=30&apikey=${import.meta.env.VITE_API_KEY}`,
      );

      return response.data.Search;
    },
    select: (data: MoviePersistence[]) => data.map(MovieMapper.toDomain),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError };
};
