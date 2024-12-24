import Modal from "@/components/common/modal";
import linkIcon from "@/assets/link.png";
import { ModalComponent } from "@/hooks/useModal";
import { IoMdCheckmark, IoMdClipboard } from "react-icons/io";
import { useRoomStore } from "@/store/useRoomStore";
import { useState } from "react";

export default function LinkModal({
  modal,
  openModal,
  closeModal,
}: ModalComponent) {
  const receiverId = useRoomStore((state) => state.messageRoom);
  const link = `${location.origin}/messages/send/${receiverId}`;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
    });
  };

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
            value={link}
            readOnly
            className="overflow-x-scroll outline-none"
          />
          {copied ? (
            <IoMdCheckmark color="gray" />
          ) : (
            <IoMdClipboard color="gray" onClick={copyToClipboard} />
          )}
        </div>
      </div>
    </Modal>
  );
}
