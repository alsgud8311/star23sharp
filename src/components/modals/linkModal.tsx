import Modal from "@/components/common/modal";
import linkIcon from "@/assets/link.png";
import { ModalComponent } from "@/hooks/useModal";
import { IoMdClipboard } from "react-icons/io";

export default function LinkModal({
  modal,
  openModal,
  closeModal,
}: ModalComponent) {
  return (
    <Modal modal={modal} openModal={openModal} closeModal={closeModal}>
      <div className="flex w-full flex-col items-center justify-center">
        <img src={linkIcon} alt="link" className="mb-3 w-10" />
        <div className="mb-3 text-center">
          <p className="text-md">링크를 공유하고</p>
          <p className="text-md">메세지를 받아보세요</p>
        </div>
        <div className="flex w-full items-center justify-between border px-2 py-1">
          <input
            type="text"
            value={"qwrrqwrqwrqwirjqiwrjioqwjroiqwjroijwqojroiqwjroij"}
            readOnly
            className="overflow-x-scroll outline-none"
          />
          <IoMdClipboard color="gray" />
        </div>
      </div>
    </Modal>
  );
}
