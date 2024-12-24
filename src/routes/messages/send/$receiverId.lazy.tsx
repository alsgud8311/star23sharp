import Button from "@/components/common/button";
import SendError from "@/components/messages/sendError";
import SendSuccess from "@/components/messages/sendSuccess";
import CheckMessageModal from "@/components/modals/checkMessageModal";
import useInput from "@/hooks/useInput";
import useModal from "@/hooks/useModal";
import useSendMessage from "@/hooks/useSubmit";
import { useRoomStore } from "@/store/useRoomStore";
import messageIcon from "@assets/message.png";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/messages/send/$receiverId")({
  component: MessageSendComponent,
});

function MessageSendComponent() {
  const navigate = useNavigate();
  const { receiverId: room_signature } = Route.useParams();
  const { text: body, updateText: updateBody } = useInput();
  const { text: sender, updateText: updateSender } = useInput("*23#");
  const { modal, openModal, closeModal } = useModal();
  const { isError, isPending, isSuccess, send } = useSendMessage();
  const currentCheckedRoom = useRoomStore((state) => state.messageRoom);

  function openCheckMessageModal() {
    if (room_signature === currentCheckedRoom) navigate({ to: "/messages" });
    else openModal();
  }

  if (isError) return <SendError />;
  if (isSuccess) return <SendSuccess />;
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <header className="flex w-full items-center justify-center border-b-2 border-black p-3 text-xl">
          메시지
        </header>
        <div className="flex flex-grow flex-col gap-2 p-4">
          <Button onClick={openCheckMessageModal}>
            <div className="flex w-full items-center justify-center gap-2">
              <img src={messageIcon} alt="message" className="w-5" />내 메시지
              확인하기
            </div>
          </Button>
          <textarea
            className="h-40 w-full overflow-y-scroll break-all border-2 border-black p-2 text-lg outline-none min-[380px]:h-80"
            placeholder="친구에게 하고 싶었지만 제대로 하지 못했던 말을 적어보세요"
            onChange={updateBody}
            value={body}
          />
          <div className="text-xl">
            <p>보내는사람</p>
            <input
              type="text"
              value={sender}
              onChange={updateSender}
              className="border-b border-black outline-none"
            />
          </div>
        </div>
        <footer className="flex h-10 w-full items-center justify-between border-y-2 border-black text-xl">
          <button className="w-1/3" onClick={() => navigate({ to: "/" })}>
            홈
          </button>
          <button
            className="w-1/3"
            onClick={() => send({ room_signature, sender, body })}
            disabled={isPending}
          >
            보내기
          </button>
        </footer>
      </div>
      <CheckMessageModal
        modal={modal}
        openModal={openModal}
        closeModal={closeModal}
        room_signature={room_signature}
      />
    </>
  );
}
