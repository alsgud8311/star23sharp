import Modal from "@/components/common/modal";
import linkIcon from "@/assets/link.png";
import { ModalComponent } from "@/hooks/useModal";
import { IoMdCheckmark, IoMdClipboard } from "react-icons/io";
import { useRoomStore } from "@/store/useRoomStore";
import { useState } from "react";
import Button from "@/components/common/button";
import { useErrorStore } from "@/store/useErrorStore";
import { getMessageTitle } from "@/api/message.api";
import { kakaoShareCustom } from "@/utils/shareMessageSend";

export default function LinkModal({
  modal,
  openModal,
  closeModal,
}: ModalComponent) {
  const receiverId = useRoomStore((state) => state.messageRoom);
  const link = `${location.origin}/messages/send/${receiverId}`;
  const [copied, setCopied] = useState(false);
  const pushError = useErrorStore((state) => state.pushError);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
    });
  };

  const share = async () => {
    try {
      const { title: receiverName } = await getMessageTitle(receiverId);
      kakaoShareCustom("MESSAGESEND", {
        RECEIVER_ID: receiverId,
        RECEIVER_NAME: receiverName,
      });
    } catch (error) {
      console.error(error);
      pushError(
        "예상치 못한 에러가 발생했어요. \n 잠시 후 다시 시도해 주세요.",
      );
    }
  };

  return (
    <Modal modal={modal} openModal={openModal} closeModal={closeModal}>
      <div className="flex w-full flex-col items-center justify-center">
        <img src={linkIcon} alt="link" className="mb-3 w-10" />
        <div className="mb-3 text-center">
          <p className="text-md">링크를 공유하고</p>
          <p className="text-md">메세지를 받아보세요</p>
        </div>
        <div className="mb-3 flex w-full items-center justify-between border px-2 py-1">
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
        <Button onClick={share}>
          <p className="text-sm">카카오톡 공유하기</p>
        </Button>
      </div>
    </Modal>
  );
}
