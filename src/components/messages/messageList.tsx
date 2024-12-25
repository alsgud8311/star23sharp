import NoMessage from "@/components/messages/noMessage";
import useMessageList from "@/hooks/useMessageList";
import useModal from "@/hooks/useModal";
import useObserver from "@/hooks/useObserver";
import { Message } from "@/types/message";
import { useNavigate } from "@tanstack/react-router";
import { useRef } from "react";

export default function MessageList() {
  const { modal: linkmodal, openModal, closeModal } = useModal();
  const { data: messages, fetchNextPage, hasNextPage } = useMessageList();
  const bottomRef = useRef(null);

  const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
    entry.isIntersecting && hasNextPage && fetchNextPage();

  const navigate = useNavigate();

  useObserver<Message[]>({
    target: bottomRef,
    onIntersect,
  });

  if (!messages.length)
    return (
      <NoMessage
        modal={linkmodal}
        openModal={openModal}
        closeModal={closeModal}
      />
    );

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 overflow-y-auto">
        {messages.map((message: Message, index: number) => (
          <div
            key={index}
            className="flex h-14 w-full items-center gap-4 border-b border-black p-2"
            onClick={() =>
              navigate({
                to: "/messages/$messageId",
                params: { messageId: message.id.toString() },
              })
            }
          >
            <span className="w-3">{index + 1}</span>
            <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {message.body}
            </span>
          </div>
        ))}
        <div className="h-10" ref={bottomRef}></div>
      </div>
    </div>
  );
}
