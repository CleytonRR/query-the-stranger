import { HTMLAttributes } from "react";

type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListItem = ({ children, ...rest }: ListItemProps) => {
  return <li {...rest}>{children}</li>;
};
