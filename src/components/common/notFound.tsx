import Button from "@/components/common/button";
import oops from "@assets/oops.png";
import { useNavigate } from "@tanstack/react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 bg-white text-black">
      <img src={oops} className="w-1/3" alt="oops" />
      <div className="flex flex-col gap-3">
        <p>존재하지 않는 링크예요</p>
        <Button onClick={() => navigate({ to: ".." })}>홈으로</Button>
      </div>
    </div>
  );
}
