import useMessage from "@/hooks/useInput";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/messages/send/$receiverId")({
  component: MessageSendComponent,
});

function MessageSendComponent() {
  const navigate = useNavigate();
  const { text, updateText } = useMessage();
  const { text: sender, updateText: updateSender } = useMessage("*23#");
  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex w-full items-center justify-center border-b-2 border-black p-3 text-xl">
        메시지
      </header>
      <div className="flex flex-grow flex-col gap-2 p-4">
        <textarea
          className="h-40 w-full overflow-y-scroll break-all border-2 border-black p-2 text-xl outline-none min-[380px]:h-80"
          placeholder="친구에게 하고 싶었지만 제대로 하지 못했던 말을 적어보세요"
          onChange={updateText}
        >
          {text}
        </textarea>
        <div>
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
        <button className="w-1/3">확인</button>
        <button className="w-1/3" onClick={() => navigate({ to: ".." })}>
          뒤로
        </button>
      </footer>
    </div>
  );
}
