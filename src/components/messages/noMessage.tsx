import Button from "@/components/common/button";
import LinkModal from "@/components/modals/linkModal";
import { ModalComponent } from "@/hooks/useModal";
import messageIcon from "@assets/message.png";

export default function NoMessage({
  modal,
  openModal,
  closeModal,
}: ModalComponent) {
  return (
    <>
      <div className="flex flex-grow flex-col items-center justify-center overflow-hidden">
        <img src={messageIcon} alt="message" className="mb-3 w-16" />
        <div className="mb-7 text-center">
          <p>링크를 공유하고</p>
          <p>친구들에게 메세지를 받아보세요</p>
        </div>
        <Button onClick={openModal}>링크 공유하기</Button>
      </div>
      <LinkModal modal={modal} openModal={openModal} closeModal={closeModal} />
    </>
  );
}
