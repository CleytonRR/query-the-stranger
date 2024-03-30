import { HTMLAttributes } from "react";

type MovieContainer = HTMLAttributes<HTMLDivElement>;

export const MovieContainer = ({ children, ...rest }: MovieContainer) => {
  return (
    <main className="mx-auto max-w-[1320px]" {...rest}>
      {children}
    </main>
  );
};
