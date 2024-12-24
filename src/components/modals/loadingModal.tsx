import Modal from "@/components/common/modal";
import { ModalComponent } from "@/hooks/useModal";
import loadingSpinner from "@assets/loading.gif";

export default function LoadingModal({
  modal,
  openModal,
  closeModal,
}: ModalComponent) {
  return (
    <Modal modal={modal} openModal={openModal} closeModal={closeModal}>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <img src={loadingSpinner} alt="loading" className="w-1/3" />
        <p>로딩중...</p>
      </div>
    </Modal>
  );
}
