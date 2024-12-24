import { getMessageDetail } from "@/api/message.api";
import NotFound from "@/components/common/notFound";
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
  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex w-full items-center justify-center border-b-2 border-black p-3 text-xl">
        메시지
      </header>
      <div className="flex flex-grow flex-col gap-2 p-4">
        <div className="h-40 w-full overflow-y-scroll break-all border-2 border-black p-2 text-xl min-[380px]:h-80">
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
          <p>24/12/24 12:22</p>
        </div>
      </div>
      <footer className="flex h-10 w-full items-center justify-between border-y-2 border-black text-xl">
        <button className="w-1/3" onClick={() => navigate({ to: "/" })}>
          홈
        </button>
        <button className="w-1/3">확인</button>
        <button className="w-1/3" onClick={() => navigate({ to: ".." })}>
          뒤로
        </button>
      </footer>
    </div>
  );
}
