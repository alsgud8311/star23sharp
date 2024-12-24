import { ModalComponent } from "@/hooks/useModal";
import { ReactNode } from "react";

export default function PushModal({
  modal,
  closeModal,
  children,
}: {
  children: ReactNode;
} & ModalComponent) {
  return (
    <>
      {modal && (
        <>
          <div className="absolute left-0 top-0 z-40 h-full w-full bg-black opacity-30" />
          <div
            className="absolute left-0 top-0 z-40 flex h-full w-full items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="z-50 flex w-3/4 translate-y-10 transform animate-slide-up items-center justify-center rounded-md bg-white p-4 opacity-0"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
}
