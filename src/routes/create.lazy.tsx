import Button from "@/components/common/button";
import useCreateMessageRoom from "@/hooks/useCreateMessageRoom";
import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createLazyFileRoute("/create")({
  component: CreateMessageRoomComponent,
});

function CreateMessageRoomComponent() {
  const {
    title,
    updateTitle,
    password,
    updatePassword,
    createRoom,
    titleErr,
    passwordErr,
  } = useCreateMessageRoom();

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
              className="w-full border-b-2 border-black text-lg"
              placeholder="친구들에게 보여져요"
            />
            <p className="text-sm text-red-500"> {titleErr}</p>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <p>비밀번호</p>
          <div className="w-full">
            <input
              type="number"
              value={password}
              onChange={updatePassword}
              className="w-full border-b-2 border-black text-lg"
              placeholder="숫자 4자리만 가능해요"
              min={1000}
              max={9999}
            />
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
