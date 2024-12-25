import Button from "@/components/common/button";
import useCreateMessageRoom from "@/hooks/useCreateMessageRoom";
import React, { useRef } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { PiEyesFill } from "react-icons/pi";

export const Route = createLazyFileRoute("/create")({
  component: CreateMessageRoomComponent,
});

function CreateMessageRoomComponent() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const {
    title,
    updateTitle,
    password,
    updatePassword,
    createRoom,
    titleErr,
    passwordErr,
  } = useCreateMessageRoom();
  function togglePassword() {
    if (passwordRef.current) {
      if (passwordRef.current.type === "password")
        passwordRef.current.type = "text";
      else passwordRef.current.type = "password";
    }
  }

  return (
    <React.Fragment>
      <p className="mb-11 text-2xl">새로운 번호 만들기</p>
      <div className="mb-11 flex w-3/4 flex-col gap-5">
        <div className="flex w-full flex-col">
          <p>제목</p>
          <div className="w-full">
            <input
              type="text"
              value={title}
              onChange={updateTitle}
              maxLength={20}
              className="w-full border-b-2 border-black text-lg outline-none"
              placeholder="친구들에게 보여져요"
            />
            <p className="text-sm text-red-500"> {titleErr}</p>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <p>비밀번호</p>
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
            <p className="text-sm text-red-500">{passwordErr}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Button onClick={createRoom}>만들기</Button>
      </div>
    </React.Fragment>
  );
}
