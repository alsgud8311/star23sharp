import { Validation } from "@/types/error";

export function checkPasswordValidation(password: string) {
  if (password.length > 4) return false;
  return true;
}

export function passwordSubmitValidation(password: string): Validation {
  if (/^\d{4}$/.test(password)) {
    return {
      result: true,
    };
  }
  return {
    result: false,
    errorMsg: "비밀번호는 4자리 숫자여야 해요",
  };
}

export function titleSubmitValidation(title: string): Validation {
  if (title.length > 0) {
    return {
      result: true,
    };
  }
  return {
    result: false,
    errorMsg: "제목을 입력해주세요",
  };
}

export function checkpasswordConfirmValidation(
  password: string,
  confirm: string,
): Validation {
  if (password !== confirm)
    return {
      result: false,
      errorMsg: "비밀번호가 일치하지 않아요",
    };
  return {
    result: true,
  };
}
