import { HTMLAttributes } from "react";

type ListContainerProps = HTMLAttributes<HTMLUListElement>;

export const ListContainer = ({ children, ...rest }: ListContainerProps) => {
  return <ul {...rest}>{children}</ul>;
};
