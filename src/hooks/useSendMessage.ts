import { sendMessage, SendMessageRequest } from "@/api/message.api";
import { useErrorStore } from "@/store/useErrorStore";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useMutation } from "@tanstack/react-query";

export default function useSendMessage() {
  const pushError = useErrorStore((state) => state.pushError);
  const changeLoading = useLoadingStore((state) => state.changeLoadingState);
  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: (sendMessageRequest: SendMessageRequest) =>
      sendMessage(sendMessageRequest),
    onMutate: () => changeLoading(true),
    onError: () => {
      changeLoading(false);
      pushError(
        "예상치 못한 에러가 발생했어요. \n 잠시 후 다시 시도해 주세요.",
      );
    },
    onSuccess: () => changeLoading(false),
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
    isError,
  };
}
