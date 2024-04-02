import { HTMLAttributes } from "react";

type ModalTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const ModalTitle = ({ children, ...rest }: ModalTitleProps) => {
  return <h1 {...rest}>{children}</h1>;
};
