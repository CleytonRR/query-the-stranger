import { HTMLAttributes } from "react";
import { Portal } from "../../Portal";

type ContainerModalProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  onClose: () => void;
};

export const ContainerModal = ({
  open,
  children,
  onClose,
  ...rest
}: ContainerModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div
        className="bg-[rgba(0,0,0,0.7)] w-svw h-svh absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        onClick={() => onClose()}
      >
        <div
          {...rest}
          className="rounded-md px-5 py-4 bg-white max-w-[650px] animate-fade"
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
