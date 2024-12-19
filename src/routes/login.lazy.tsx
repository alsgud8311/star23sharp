import Button from "@/components/common/button";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import React from "react";

export const Route = createLazyFileRoute("/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <p className="mb-11 text-2xl">로그인</p>
      <div className="mb-11 flex flex-col gap-5">
        <div className="flex flex-col">
          <p>나만의 번호</p>
          <input type="number" className="border-b-2 border-black text-xl" />
        </div>
        <div className="flex flex-col">
          <p>비밀번호</p>
          <input type="password" className="border-b-2 border-black text-xl" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Button>로그인</Button>
        <Button onClick={() => navigate({ to: "/signup" })}>새로 만들기</Button>
      </div>
    </React.Fragment>
  );
}
