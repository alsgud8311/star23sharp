import { sendMessage, SendMessageRequest } from "@/api/message.api";
import { useMutation } from "@tanstack/react-query";

export default function useSendMessage() {
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (sendMessageRequest: SendMessageRequest) =>
      sendMessage(sendMessageRequest),
  });

  function send(sendMessageRequest: SendMessageRequest) {
    mutate(sendMessageRequest);
  }

  return {
    isSuccess,
    send,
    isPending,
    isError,
  };
}
