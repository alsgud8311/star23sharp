import Button from "@/components/common/button";
import errorIcon from "@assets/error.png";
import { useNavigate } from "@tanstack/react-router";

export default function SendError() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <img src={errorIcon} alt="success" className="w-1/3" />
        <p>메시지 전송중 오류가 발생했어요</p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <Button onClick={() => location.reload()}>새로고침</Button>
        <Button onClick={() => navigate({ to: "/" })}>홈으로</Button>
      </div>
    </div>
  );
}
