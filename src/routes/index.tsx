import { createFileRoute, useNavigate } from "@tanstack/react-router";
import postbox from "@assets/postbox.png";
import Button from "@/components/common/button";
import React from "react";
import { useRoomStore } from "@/store/useRoomStore";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const loggedIn = useRoomStore((state) => state.messageRoom);
  return (
    <React.Fragment>
      <img
        src={postbox}
        alt="별이삼샵"
        className="mb-3 w-2/5 translate-y-10 transform animate-slide-up opacity-0"
      />
      <div className="mb-5 text-center">
        <p className="text-xl">별이삼샵</p>
        <p>나만의 프라이빗 롤링페이퍼</p>
      </div>
      <div className="flex flex-col gap-3">
        <Button
          onClick={() => {
            navigate({ to: "/create" });
          }}
        >
          시작하기
        </Button>
        {loggedIn && (
          <Button
            onClick={() => {
              navigate({ to: "/messages" });
            }}
          >
            내 메시지함
          </Button>
        )}
      </div>
    </React.Fragment>
  );
}
