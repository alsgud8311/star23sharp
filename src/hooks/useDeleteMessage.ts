import { deleteMessage } from "@/api/message.api";
import { messageKeys } from "@/components/messages/queries";
import useModal from "@/hooks/useModal";
import { useErrorStore } from "@/store/useErrorStore";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { isAxiosError } from "axios";

export default function useDeleteMessage(messageId: string) {
  const { modal, openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const changeLoading = useLoadingStore((state) => state.changeLoadingState);
  const queryClient = useQueryClient();
  const deleteInform = "해당 메시지를 삭제하시겠습니까?";
  const pushError = useErrorStore((state) => state.pushError);

  const mutation = useMutation({
    mutationFn: (messageId: string) => deleteMessage(messageId),
    onMutate: () => changeLoading(true),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: messageKeys.lists(),
      });
      closeModal();
      changeLoading(false);
      navigate({ to: "/messages" });
    },
    onError: (error) => {
      if (isAxiosError(error)) pushError(error.response?.data.message);
      changeLoading(false);
    },
  });

  function messageDelete() {
    mutation.mutate(messageId);
  }
  return {
    messageDelete,
    deleteInform,
    modal,
    openModal,
    closeModal,
  };
}
