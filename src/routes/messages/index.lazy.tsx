import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { TbMailDown } from "react-icons/tb";
import linkIcon from "@assets/link.png";
import MessageList from "@/components/messages/messageList";
import useModal from "@/hooks/useModal";
import LinkModal from "@/components/modals/linkModal";

export const Route = createLazyFileRoute("/messages/")({
  component: MessagesComponent,
});
const dummy = [
  //   {
  //     message: "대박쓰 우와아아ㅏ아아ㅏ아아아ㅏ아qwjirj아아",
  //   },
  //   {
  //     message: "대박쓰",
  //   },
  //   {
  //     message: "대박쓰",
  //   },
  //   {
  //     message: "대박쓰",
  //   },
  //   {
  //     message: "대박쓰",
  //   },
  //   {
  //     message: "대박쓰",
  //   },
  //   {
  //     message: "대박쓰",
  //   },
  //   {
  //     message: "대박쓰",
  //   },
];
function MessagesComponent() {
  const navigate = useNavigate();
  const { modal, openModal, closeModal } = useModal();
  return (
    <>
      <div className="relative flex h-full w-full flex-col justify-between">
        <header className="w-ful flex h-12 items-center justify-center gap-2 border-y-2 border-black text-xl">
          <TbMailDown size={30} color="crimson" />
          받은 메시지
        </header>
        <button
          className="flex justify-center gap-2 border-b bg-yellow-100 p-2"
          onClick={openModal}
        >
          <img src={linkIcon} alt="link" className="w-5" />
          링크 공유하기
        </button>
        <MessageList messages={dummy} />
        <footer className="flex h-10 w-full items-center justify-between border-y-2 border-black text-xl">
          <button className="w-1/3" onClick={() => navigate({ to: ".." })}>
            홈
          </button>
          <button className="w-1/3">확인</button>
          <button className="w-1/3" onClick={() => navigate({ to: ".." })}>
            나가기
          </button>
        </footer>
      </div>
      <LinkModal openModal={openModal} closeModal={closeModal} modal={modal} />
    </>
  );
}
