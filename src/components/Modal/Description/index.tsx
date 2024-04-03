import { HTMLAttributes } from "react";

type ModalDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const ModalDescription = ({
  children,
  ...rest
}: ModalDescriptionProps) => {
  return (
    <p className="text-slate-500" {...rest}>
      {children}
    </p>
  );
};
