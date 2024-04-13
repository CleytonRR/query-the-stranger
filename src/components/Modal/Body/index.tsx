import { HTMLAttributes } from "react";

type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

export const ModalBody = ({ children, ...rest }: ModalBodyProps) => {
  return (
    <main className={"flex gap-3 animate-fade"} {...rest}>
      {children}
    </main>
  );
};
