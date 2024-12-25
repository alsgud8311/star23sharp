import { sendMessage, SendMessageRequest } from "@/api/message.api";
import { useErrorStore } from "@/store/useErrorStore";
import { useMutation } from "@tanstack/react-query";

export default function useSendMessage() {
  const pushError = useErrorStore((state) => state.pushError);
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (sendMessageRequest: SendMessageRequest) =>
      sendMessage(sendMessageRequest),
  });

  function send(sendMessageRequest: SendMessageRequest) {
    if (!sendMessageRequest.body) {
      pushError("내용을 입력해주세요!");
      return;
    }
    if (!sendMessageRequest.sender) {
      pushError("보내는사람을 입력해주세요!");
      return;
    }
    mutate(sendMessageRequest);
  }

  return {
    isSuccess,
    send,
    isPending,
    isError,
  };
}
