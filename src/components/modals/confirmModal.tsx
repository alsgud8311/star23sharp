import Button from "@/components/common/button";
import Modal from "@/components/common/modal";
import { ModalComponent } from "@/hooks/useModal";

export default function ConfirmModal({
  modal,
  openModal,
  closeModal,
  onConfirm,
  inform,
}: { onConfirm: () => void; inform: string } & ModalComponent) {
  return (
    <Modal modal={modal} openModal={openModal} closeModal={closeModal}>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-2 text-center text-black">
        <p className="break-words">{inform}</p>
        <div className="flex w-full flex-col gap-2 p-2">
          <Button onClick={onConfirm}>확인</Button>
          <Button onClick={closeModal}>취소</Button>
        </div>
      </div>
    </Modal>
  );
}
