import Modal from "@/components/common/modal";
import messageIcon from "@assets/message.png";
import { ModalComponent } from "@/hooks/useModal";
import Button from "@/components/common/button";
import useCheckMessageRoom from "@/hooks/useCheckMessageRoom";
import { useNavigate } from "@tanstack/react-router";

export default function CheckMessageModal({
  modal,
  openModal,
  closeModal,
  room_signature,
}: { room_signature: string } & ModalComponent) {
  const { isPending, password, signIn, updatePassword, validationErr } =
    useCheckMessageRoom(room_signature);
  const navigate = useNavigate();
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
          <div className="flex w-full flex-col">
            <input
              type="password"
              className="border-b border-black text-center outline-none"
              value={password}
              onChange={updatePassword}
            />
            <p className="text-sm text-red-500">{validationErr}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() =>
              signIn({ room_signature: room_signature, password: password })
            }
            disabled={isPending}
          >
            확인
          </Button>
          <Button onClick={() => navigate({ to: "/create" })}>
            새로 만들기
          </Button>
        </div>
      </div>
    </Modal>
  );
}
