import { MovieContainer } from "./components/Movies/Container";
import { ListMovie } from "./components/Movies/ListContainer";
import { ListItem } from "./components/Movies/ListItem";
import { useMoviesQuery } from "./hooks/query/movies/useMoviesQuery";

function App() {
  const { data: movies } = useMoviesQuery();

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-svh">
      <MovieContainer>
        <ListMovie className="grid gap-4 items-center justify-items-stretch auto-cols-fr grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {movies &&
            movies.map((movie) => (
              <ListItem
                key={movie.imdbID}
                className="flex items-center flex-col gap-2 p-4 bg-slate-50 shadow-lg rounded-md"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-44 h-52"
                />
                <h5 className="whitespace-nowrap truncate max-w-36">
                  {movie.title}
                </h5>
              </ListItem>
            ))}
        </ListMovie>
      </MovieContainer>
    </div>
  );
}

export default App;
