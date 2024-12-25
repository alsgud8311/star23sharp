import { useCreateMessageRoomMutation } from "@/api/fetchHooks/message";
import { CreateMessageRoomResponse } from "@/api/message.api";
import useInput from "@/hooks/useInput";
import useValidationCheck from "@/hooks/useValidationCheck";
import { useErrorStore } from "@/store/useErrorStore";
import { useRoomStore } from "@/store/useRoomStore";
import {
  checkpasswordConfirmValidation,
  checkPasswordValidation,
  passwordSubmitValidation,
  titleSubmitValidation,
} from "@/utils/validation";
import { useNavigate } from "@tanstack/react-router";

export default function useCreateMessageRoom() {
  const mutation = useCreateMessageRoomMutation();
  const navigate = useNavigate();
  const pushError = useErrorStore((state) => state.pushError);

  const { text: title, updateText: updateTitle } = useInput();
  const { text: password, updateText: updatePassword } = useInput(
    undefined,
    checkPasswordValidation,
  );
  const { text: passwordConfirm, updateText: updatePasswordConfirm } = useInput(
    undefined,
    checkPasswordValidation,
  );

  const { errorMessage: titleErr, checkValidation: titleCheck } =
    useValidationCheck(() => titleSubmitValidation(title));
  const { errorMessage: passwordErr, checkValidation: passwordCheck } =
    useValidationCheck(() => passwordSubmitValidation(password));
  const {
    errorMessage: passwordConfirmErr,
    checkValidation: passwordConfirmCheck,
  } = useValidationCheck(() =>
    checkpasswordConfirmValidation(password, passwordConfirm),
  );

  const signIn = useRoomStore((state) => state.signIn);

  function createRoom() {
    const isValid = passwordCheck() && titleCheck() && passwordConfirmCheck();
    if (!isValid) return;
    mutation.mutate(
      { title, password },
      {
        onSuccess: (res: CreateMessageRoomResponse) => {
          signIn(res.room_signature, res.access_token);
          navigate({ to: "/messages" });
        },
        onError: (error) => {
          console.error(error);
          pushError(
            "예상치 못한 문제가 발생했어요.\n잠시 후 다시 시도해 주세요",
          );
        },
      },
    );
  }

  return {
    title,
    updateTitle,
    password,
    updatePassword,
    passwordConfirm,
    updatePasswordConfirm,
    passwordConfirmErr,
    createRoom,
    passwordErr,
    titleErr,
  };
}
