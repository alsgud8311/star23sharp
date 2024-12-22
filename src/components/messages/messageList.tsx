import NoMessage from "@/components/messages/noMessage";
import useModal from "@/hooks/useModal";
import { Message } from "@/types/message";

export default function MessageList({ messages }: { messages: Message[] }) {
  const { modal: linkmodal, openModal, closeModal } = useModal();

  if (!messages.length)
    return (
      <NoMessage
        modal={linkmodal}
        openModal={openModal}
        closeModal={closeModal}
      />
    );
  return (
    <div className="grid w-full flex-grow grid-rows-8 overflow-hidden">
      {messages.map((message: Message, index: number) => (
        <div
          className={`flex items-center gap-4 border-black p-2 ${index === 10 ? "" : "border-b"}`}
        >
          <span className="w-3">{index + 1}</span>
          <span className="w-3/4 overflow-hidden text-ellipsis whitespace-nowrap">
            {message.message}
          </span>
        </div>
      ))}
    </div>
  );
}
