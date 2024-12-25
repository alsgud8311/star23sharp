import { getMessageTitle, MessageTitle } from "@/api/message.api";
import Button from "@/components/common/button";
import NotFound from "@/components/common/notFound";
import SendError from "@/components/messages/sendError";
import SendSuccess from "@/components/messages/sendSuccess";
import CheckMessageModal from "@/components/modals/checkMessageModal";
import useInput from "@/hooks/useInput";
import useModal from "@/hooks/useModal";
import useSendMessage from "@/hooks/useSendMessage";
import { useRoomStore } from "@/store/useRoomStore";
import messageIcon from "@assets/message.png";
import {
  createFileRoute,
  notFound,
  useLoaderData,
  useNavigate,
} from "@tanstack/react-router";

export const Route = createFileRoute("/messages/send/$receiverId")({
  component: MessageSendComponent,
  notFoundComponent: NotFound,
  loader: async ({ params: { receiverId } }): Promise<MessageTitle> => {
    try {
      const roomTitle = await getMessageTitle(receiverId);
      return roomTitle;
    } catch (err) {
      console.error(err);
      throw notFound();
    }
  },
});

function MessageSendComponent() {
  const navigate = useNavigate();
  const { receiverId: room_signature } = Route.useParams();
  const { text: body, updateText: updateBody } = useInput();
  const { text: sender, updateText: updateSender } = useInput("*23#");
  const { modal, openModal, closeModal } = useModal();
  const { isError, isPending, isSuccess, send } = useSendMessage();
  const currentCheckedRoom = useRoomStore((state) => state.messageRoom);
  const room = useLoaderData({ from: "/messages/send/$receiverId" });

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
        <div className="relative flex flex-1 flex-col">
          <div
            className="absolute inset-0 h-full w-full"
            id="messageSend"
            onScroll={() => console.log("scroll")}
            onTouchMove={() => console.log("touchmove")}
          >
            <div className="h-full w-full touch-pan-y flex-col gap-2 overflow-scroll p-4">
              <div className="mb-4 flex items-center justify-center">
                <Button onClick={openCheckMessageModal}>
                  <div className="flex w-full items-center justify-center gap-2">
                    <img src={messageIcon} alt="message" className="w-5" />내
                    메시지 확인하기
                  </div>
                </Button>
              </div>
              <textarea
                className="h-72 w-full break-all border-2 border-black p-2 text-lg outline-none"
                placeholder="친구에게 하고 싶었지만 제대로 하지 못했던 말을 적어보세요"
                onChange={updateBody}
                maxLength={500}
                value={body}
              />
              <div className="flex flex-col text-lg">
                <p>보내는사람</p>
                <input
                  type="text"
                  value={sender}
                  maxLength={15}
                  onChange={updateSender}
                  className="w-3/4 border-b border-black outline-none"
                />
              </div>
              <div className="text-lg">
                <p>받는사람</p>
                <p className="text-sm">{room.title}</p>
              </div>
            </div>
          </div>
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
      <CheckMessageModal
        modal={modal}
        openModal={openModal}
        closeModal={closeModal}
        room_signature={room_signature}
      />
    </>
  );
}
