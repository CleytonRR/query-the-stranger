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

const movies = [
  {
    title: "That Obscure Object of Desire",
    year: "1977",
    imdbID: "tt0075824",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGQzZGQxZTctMzE2Mi00OGFiLTg2ZjQtZTAwYzMyMjExN2JiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  },
  {
    title: "The Object of My Affection",
    year: "1998",
    imdbID: "tt0120772",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYmNjODYxOTMtNTBhMS00MmVhLWFiODUtYzYxMDA1MzNmZTEyXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
  },
  {
    title: "Love Object",
    year: "2003",
    imdbID: "tt0328077",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYThjMGE5MzktYjVjNy00ZWJkLWFiMTAtNjk0YzI1NzBhODM5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "The Object of Beauty",
    year: "1991",
    imdbID: "tt0102573",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTI2MzQ4ODQ3MV5BMl5BanBnXkFtZTcwODQyMzgyMQ@@._V1_SX300.jpg",
  },
  {
    title: "Mysterious Object at Noon",
    year: "2000",
    imdbID: "tt0269587",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTU5MTI4NTM3NF5BMl5BanBnXkFtZTcwMjMxMTgxMQ@@._V1_SX300.jpg",
  },
  {
    title: "An Object at Rest",
    year: "2015",
    imdbID: "tt5062438",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EzY2JkM2EtODk2NC00MWIyLWFkYWMtNjk2N2ZjODg1ZjZjXkEyXkFqcGdeQXVyOTg3MjcwMjg@._V1_SX300.jpg",
  },
  {
    title: "Heavy Object",
    year: "2015–",
    imdbID: "tt5236260",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjQxODAwNTQtODM1MS00NDQwLTg0ODAtMjJiYjhlZDMzN2RmXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
  },
  {
    title: "Object of Obsession",
    year: "1994",
    imdbID: "tt0114024",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjkzNGQzODMtMDM4MS00YTU2LWI2M2UtN2I2NTA2MDUzZmRmXkEyXkFqcGdeQXVyMTE5MzU1Njkw._V1_SX300.jpg",
  },
  {
    title: "The Transcendental Object at the End of Time",
    year: "2014",
    imdbID: "tt4001078",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc3MDI2MTA2Ml5BMl5BanBnXkFtZTgwMzgzNDE2MjE@._V1_SX300.jpg",
  },
  {
    title: "The Daily Object Show",
    year: "2020–2023",
    imdbID: "tt14743640",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjZjNDA4OWMtMGNhOC00NmE0LTg3NWEtMTYxMDc3MTkxYTNmXkEyXkFqcGdeQXVyNzEwMzUxMzU@._V1_SX300.jpg",
  },
];

function App() {
  const [pageParam, setPageParam] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  // const { data: movies } = useMoviesQuery({ pageParam });

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-svh">
      <MovieContainer>
        <ListMovie className="grid gap-4 items-center justify-items-stretch auto-cols-fr grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {movies &&
            movies.map((movie) => (
              <ListItem
                key={movie.imdbID}
                className="flex items-center flex-col gap-2 p-4 bg-slate-50 shadow-lg rounded-md"
                role="button"
                onClick={() => setOpenModal(true)}
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

      <ContainerModal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalBody>
          <ModalImage src="https://m.media-amazon.com/images/M/MV5BZjkzNGQzODMtMDM4MS00YTU2LWI2M2UtN2I2NTA2MDUzZmRmXkEyXkFqcGdeQXVyMTE5MzU1Njkw._V1_SX300.jpg" />
          <div className="flex flex-col">
            <ModalTitle>Object of Obsession</ModalTitle>
            <ModalDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              cumque consequuntur quam eos animi. Molestias, est minus.
              Doloremque atque eius voluptatem reiciendis commodi quae culpa
              est, porro pariatur? Quod, praesentium.
            </ModalDescription>
          </div>
        </ModalBody>
      </ContainerModal>
    </div>
  );
}

export default App;
