import Modal from "@/components/common/modal";
import messageIcon from "@assets/message.png";
import { ModalComponent } from "@/hooks/useModal";
import Button from "@/components/common/button";

export default function CheckMessageModal({
  modal,
  openModal,
  closeModal,
  room_signature,
}: { room_signature: string } & ModalComponent) {
  return (
    <Modal modal={modal} openModal={openModal} closeModal={closeModal}>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <div className="text-center">
            <p>내 메시지 확인하기</p>
            <p className="text-xs text-gray-400">
              내 메시지 링크에서 들어가야 해요
            </p>
          </div>
          <img src={messageIcon} alt="link" className="mb-3 w-10" />
        </div>
        <div className="mb-5 flex w-full flex-col items-center justify-center">
          <p>비밀번호</p>
          <input
            type="password"
            className="border-b border-black text-center outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button>확인</Button>
          <Button>새로 만들기</Button>
        </div>
      </div>
    </Modal>
  );
}
