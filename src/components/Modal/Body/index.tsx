import { HTMLAttributes } from "react";

type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

export const ModalBody = ({ children, ...rest }: ModalBodyProps) => {
  return <main {...rest}>{children}</main>;
};
