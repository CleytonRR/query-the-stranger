import { useQuery } from "@tanstack/react-query";
import { clientApi } from "../../../services/api";
import MovieMapper from "../../../services/mappers/MovieMapper";
import { MoviePersistence } from "../../../types/Movie";

type ResponseAPI = {
  Search: MoviePersistence[];
};

export const useMoviesQuery = (search?: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", search],
    queryFn: async () => {
      const response = await clientApi.get<ResponseAPI>(
        `/?s=${search ?? "terror"}&limit=30&apikey=${import.meta.env.VITE_API_KEY}`,
      );

      return response.data.Search;
    },
    select: (data: MoviePersistence[]) => data.map(MovieMapper.toDomain),
  });

  return { data, isLoading, isError };
};
