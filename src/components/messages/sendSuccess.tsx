import Button from "@/components/common/button";
import messagingSuccessIcon from "@assets/messagingSuccess.png";
import { useNavigate } from "@tanstack/react-router";

export default function SendSuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <img src={messagingSuccessIcon} alt="success" className="w-1/3" />
        <p>메시지 전송이 완료되었습니다</p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <Button onClick={() => navigate({ to: "/" })}>홈으로</Button>
        <Button onClick={() => navigate({ to: "/create" })}>
          나도 메시지 만들기
        </Button>
      </div>
    </div>
  );
}
