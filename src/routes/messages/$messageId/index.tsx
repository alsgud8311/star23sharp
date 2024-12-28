import { getMessageDetail } from "@/api/message.api";
import NotFound from "@/components/common/notFound";
import ConfirmModal from "@/components/modals/confirmModal";
import useDeleteMessage from "@/hooks/useDeleteMessage";
import useTouchScroll from "@/hooks/useTouchScroll";
import { Message } from "@/types/message";
import {
  createFileRoute,
  notFound,
  useLoaderData,
  useNavigate,
} from "@tanstack/react-router";

export const Route = createFileRoute("/messages/$messageId/")({
  component: DeatilMessageComponent,
  notFoundComponent: () => <NotFound />,
  loader: async ({ params: { messageId } }): Promise<Message> => {
    try {
      const detailData = await getMessageDetail(messageId);
      return detailData;
    } catch (err) {
      console.error(err);
      throw notFound();
    }
  },
});

function DeatilMessageComponent() {
  const detailData: Message = useLoaderData({ from: "/messages/$messageId/" });
  const navigate = useNavigate();
  const { modal, openModal, closeModal, deleteInform, messageDelete } =
    useDeleteMessage(detailData.id.toString());
  const scrollRef = useTouchScroll();
  const MessageDeatilScrollRef = useTouchScroll();
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <header className="flex w-full items-center justify-center border-b-2 border-black p-3 text-xl">
          메시지
        </header>
        <div className="relative flex flex-1 flex-col">
          <div
            className="absolute inset-0 h-full w-full overflow-hidden"
            id="messageSend"
            onScroll={() => console.log("scroll")}
            onTouchMove={() => console.log("touchmove")}
          >
            <div
              className="h-full w-full touch-pan-y flex-col gap-2 overflow-scroll p-4"
              ref={scrollRef}
            >
              <div
                className="h-60 w-full overflow-y-scroll break-all border-2 border-black p-2 text-xl min-[380px]:h-60"
                ref={MessageDeatilScrollRef}
              >
                {detailData.body}
              </div>
              <div>
                <p>보낸사람</p>
                <p>
                  {detailData.sender === "*23#"
                    ? "발신자표시제한"
                    : detailData.sender}
                </p>
              </div>
              <div>
                <p>보낸시간</p>
                <p>{detailData.created_at}</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex h-10 w-full items-center justify-between border-y-2 border-black text-xl">
          <button className="w-1/3" onClick={() => navigate({ to: "/" })}>
            홈
          </button>
          <button className="w-1/3" onClick={openModal}>
            삭제
          </button>
          <button className="w-1/3" onClick={() => navigate({ to: ".." })}>
            뒤로
          </button>
        </footer>
      </div>
      <ConfirmModal
        modal={modal}
        openModal={openModal}
        closeModal={closeModal}
        inform={deleteInform}
        onConfirm={messageDelete}
      />
    </>
  );
}
