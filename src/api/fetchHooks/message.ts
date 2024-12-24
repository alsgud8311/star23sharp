import { createMessageRoom, CreateMessageRoomRequest } from "@/api/message.api";
import { useMutation } from "@tanstack/react-query";

export function useCreateMessageRoomMutation() {
  return useMutation({
    mutationFn: (createMessageRoomRequest: CreateMessageRoomRequest) =>
      createMessageRoom(createMessageRoomRequest),
  });
}
