import { Mapper } from "../../types/Mapper";
import { Movie, MoviePersistence } from "../../types/Movie";

class MovieMapper implements Mapper<Movie, MoviePersistence> {
  toPersistence(domainMovie: Movie) {
    return {
      Title: domainMovie.title,
      Year: domainMovie.year,
      imdbID: domainMovie.imdbID,
      Type: domainMovie.type,
      Poster: domainMovie.poster,
    };
  }

  toDomain(persistenceMovie: MoviePersistence) {
    return {
      title: persistenceMovie.Title,
      year: persistenceMovie.Year,
      imdbID: persistenceMovie.imdbID,
      type: persistenceMovie.Type,
      poster: persistenceMovie.Poster,
    };
  }
}

export default new MovieMapper();
