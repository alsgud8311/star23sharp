import { useCreateMessageRoomMutation } from "@/api/fetchHooks/message";
import { CreateMessageRoomResponse } from "@/api/message.api";
import useInput from "@/hooks/useInput";
import useValidationCheck from "@/hooks/useValidationCheck";
import { useRoomStore } from "@/store/useRoomStore";
import {
  checkPasswordValidation,
  passwordSubmitValidation,
  titleSubmitValidation,
} from "@/utils/validation";
import { useNavigate } from "@tanstack/react-router";

export default function useCreateMessageRoom() {
  const mutation = useCreateMessageRoomMutation();
  const navigate = useNavigate();

  const { text: title, updateText: updateTitle } = useInput();
  const { text: password, updateText: updatePassword } = useInput(
    undefined,
    checkPasswordValidation,
  );

  const { errorMessage: passwordErr, checkValidation: passwordCheck } =
    useValidationCheck(() => passwordSubmitValidation(password));
  const { errorMessage: titleErr, checkValidation: titleCheck } =
    useValidationCheck(() => titleSubmitValidation(title));

  const signIn = useRoomStore((state) => state.signIn);

  function createRoom() {
    if (!passwordCheck() || !titleCheck()) return;
    mutation.mutate(
      { title, password },
      {
        onSuccess: (res: CreateMessageRoomResponse) => {
          signIn(res.room_signature, res.access_token);
          navigate({ to: "/messages" });
        },
        onError: (error) => {
          throw error;
        },
      },
    );
  }

  return {
    title,
    updateTitle,
    password,
    updatePassword,
    createRoom,
    passwordErr,
    titleErr,
  };
}
