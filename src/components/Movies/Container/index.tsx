import { HTMLAttributes, useState } from "react";
import { useMoviesQuery } from "../../../hooks/query/movies/useMoviesQuery";

type MovieContainer = HTMLAttributes<HTMLDivElement>;

export const MovieContainer = ({ children, ...rest }: MovieContainer) => {
  const [searchTerm, setSearchTem] = useState("terror");

  const { data } = useMoviesQuery({ search: searchTerm });
  console.log({ data });
  return (
    <main className="mx-auto max-w-[1320px]" {...rest}>
      {children}
    </main>
  );
};
