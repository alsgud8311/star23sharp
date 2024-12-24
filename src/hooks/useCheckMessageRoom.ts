import { roomSignIn, RoomSignInRequest } from "@/api/auth.api";
import useInput from "@/hooks/useInput";
import { useErrorStore } from "@/store/useErrorStore";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useRoomStore } from "@/store/useRoomStore";
import { checkPasswordValidation } from "@/utils/validation";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { AxiosError, isAxiosError } from "axios";
import { useState } from "react";

export default function useCheckMessageRoom(room_signature: string) {
  const { text: password, updateText: updatePassword } = useInput(
    undefined,
    checkPasswordValidation,
  );
  const [validationErr, setValidationErr] = useState("");
  const saveToken = useRoomStore((state) => state.signIn);
  const navigate = useNavigate();
  const pushError = useErrorStore((state) => state.pushError);
  const changeLoadingState = useLoadingStore(
    (state) => state.changeLoadingState,
  );

  const { mutate, isPending } = useMutation({
    mutationFn: (req: RoomSignInRequest) => roomSignIn(req),
    onMutate: () => changeLoadingState(true),
    onSuccess: (res) => {
      changeLoadingState(false);
      saveToken(room_signature, res.access_token);
      navigate({ to: "/messages" });
    },
    onError: (error: AxiosError | Error) => {
      changeLoadingState(false);
      if (isAxiosError(error) && error.status === 400)
        pushError(error.response?.data.message);
      else throw error;
    },
  });

  function signIn(req: RoomSignInRequest) {
    if (validationCheck()) {
      mutate(req);
    }
  }

  function validationCheck() {
    if (!password) {
      setValidationErr("비밀번호를 입력해주세요");
      return false;
    }
    if (password.length < 4) {
      setValidationErr("비밀번호는 4자입니다.");
      return false;
    }
    return true;
  }
  return {
    signIn,
    validationErr,
    updatePassword,
    password,
    isPending,
  };
}
