import { HTMLAttributes } from "react";

type ModalImageProps = HTMLAttributes<HTMLImageElement> & {
  src?: string;
};

export const ModalImage = ({ ...rest }: ModalImageProps) => {
  return <img {...rest} />;
};
