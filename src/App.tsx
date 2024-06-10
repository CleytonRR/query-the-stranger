import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { ModalBody } from "./components/Modal/Body";
import { ContainerModal } from "./components/Modal/Container";
import { ModalDescription } from "./components/Modal/Description";
import { ModalImage } from "./components/Modal/Image";
import { ModalTitle } from "./components/Modal/Title";
import { MovieContainer } from "./components/Movies/Container";
import { ListMovie } from "./components/Movies/ListContainer";
import { ListItem } from "./components/Movies/ListItem";
import { useMoviesQuery } from "./hooks/query/movies/useMoviesQuery";
import { Movie } from "./types/Movie";

function App() {
  const [pageParam, setPageParam] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const { data: movies } = useMoviesQuery({ pageParam });

  const handlerOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  };

  console.log(selectedMovie);

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-svh">
      <MovieContainer>
        <ListMovie className="grid gap-4 items-center justify-items-stretch auto-cols-fr grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {movies &&
            movies.map((movie) => (
              <ListItem
                key={movie.imdbID}
                className="flex items-center flex-col gap-2 p-4 bg-slate-50 shadow-lg rounded-md hover:scale-105 transition-all hover:bg-slate-200"
                role="button"
                onClick={() => handlerOpenModal(movie as unknown as Movie)}
                aria-label="Botão para abrir modal com mais detalhes sobre o filme selecionado"
                tabIndex={0}
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
        <section className="flex items-center justify-center gap-4 mt-6">
          <button
            disabled={pageParam === 1}
            onClick={() => setPageParam((prev) => prev - 1)}
            className="flex items-center bg-white px-2 pr-6 py-1 rounded shadow-md hover:bg-pink-300 transition-all hover:scale-105"
          >
            <ChevronLeftIcon className="w-8 h-8" /> <span>Anterior</span>
          </button>
          <button
            onClick={() => setPageParam((prev) => prev + 1)}
            className="flex items-center bg-white px-2 pl-6 py-1 rounded shadow-md hover:bg-pink-300 transition-all hover:scale-105"
          >
            Próximo <ChevronRightIcon className="w-8 h-8" />
          </button>
        </section>
      </MovieContainer>

      <ContainerModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        className="animate-fade"
      >
        <ModalBody>
          <ModalImage src={selectedMovie?.poster} />
          <div className="flex flex-col">
            <ModalTitle>{selectedMovie?.title}</ModalTitle>
            <ModalDescription>{selectedMovie?.type}</ModalDescription>
          </div>
        </ModalBody>
      </ContainerModal>
    </div>
  );
}

export default App;
