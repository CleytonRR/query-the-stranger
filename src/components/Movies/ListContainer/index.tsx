import { HTMLAttributes } from "react";

type ListMovieProps = HTMLAttributes<HTMLUListElement>;

export const ListMovie = ({ children, ...rest }: ListMovieProps) => {
  return <ul {...rest}>{children}</ul>;
};
