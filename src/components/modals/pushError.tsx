import Button from "@/components/common/button";
import PushModal from "@/components/common/pushModal";
import { useErrorStore } from "@/store/useErrorStore";

export default function PushError() {
  const { errorMessage, confirmError } = useErrorStore();
  return (
    <PushModal modal={!!errorMessage}>
      <div className="flex w-full flex-col items-center justify-center gap-5 text-black">
        <p>{errorMessage}</p>
        <Button onClick={confirmError}>확인</Button>
      </div>
    </PushModal>
  );
}
