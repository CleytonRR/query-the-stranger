import { HTMLAttributes } from "react";

type MovieContainer = HTMLAttributes<HTMLDivElement>;

export const MovieContainer = ({ children, ...rest }: MovieContainer) => {
  return <main {...rest}>{children}</main>;
};
