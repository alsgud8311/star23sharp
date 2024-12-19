import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import postbox from "@assets/postbox.png";
import Button from "@/components/common/button";
import React from "react";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <img
        src={postbox}
        alt="별이삼샵"
        className="transform translate-y-10 opacity-0 w-1/2 animate-slide-up"
      />
      <p className="p-4 text-xl">별이삼샵</p>
      <Button
        onClick={() => {
          navigate({ to: "/login" });
        }}
      >
        시작하기
      </Button>
    </React.Fragment>
  );
}
