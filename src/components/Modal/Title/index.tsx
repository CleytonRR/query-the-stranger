import { HTMLAttributes } from "react";

type ModalTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const ModalTitle = ({ children, ...rest }: ModalTitleProps) => {
  return (
    <h1 className="text-2xl mb-2" {...rest}>
      {children}
    </h1>
  );
};
