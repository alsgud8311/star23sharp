import { ChangeEventHandler, useRef } from "react";
import { PiEyesFill } from "react-icons/pi";

type PasswordInputProps = {
  password: string;
  updatePassword: ChangeEventHandler<HTMLInputElement>;
  errorMsg: string;
  informText?: string;
};
export default function PasswordInput({
  password,
  updatePassword,
  errorMsg,
  informText,
}: PasswordInputProps) {
  const passwordRef = useRef<HTMLInputElement>(null);
  function togglePassword() {
    if (passwordRef.current) {
      if (passwordRef.current.type === "password")
        passwordRef.current.type = "text";
      else passwordRef.current.type = "password";
    }
  }
  return (
    <div className="flex w-full flex-col">
      <p>{informText ?? "비밀번호"}</p>
      <div className="w-full">
        <div className="flex items-center border-b-2 border-black pr-2">
          <input
            ref={passwordRef}
            type="password"
            value={password}
            onChange={updatePassword}
            className={`w-full text-lg outline-none`}
            placeholder="숫자 4자리만 가능해요"
            maxLength={4}
          />
          <PiEyesFill
            size={20}
            onMouseDown={togglePassword}
            onMouseUp={togglePassword}
            onTouchStart={togglePassword}
            onTouchEnd={togglePassword}
          />
        </div>
        <p className="text-sm text-red-500">{errorMsg}</p>
      </div>
    </div>
  );
}
