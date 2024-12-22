import { useState } from "react";

export type ModalComponent = {
  modal: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export default function useModal() {
  const [modal, setModal] = useState(false);
  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  return { modal, openModal, closeModal };
}
