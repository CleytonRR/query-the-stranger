import { HTMLAttributes } from "react";

type ModalDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const ModalDescription = ({
  children,
  ...rest
}: ModalDescriptionProps) => {
  return <p {...rest}>{children}</p>;
};
