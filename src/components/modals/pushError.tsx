import Button from "@/components/common/button";
import Modal from "@/components/common/modal";
import { useErrorStore } from "@/store/useErrorStore";

export default function PushError() {
  const { errorMessage, confirmError } = useErrorStore();
  return (
    <Modal modal={!!errorMessage}>
      <div className="flex w-full flex-col items-center justify-center">
        <p>{errorMessage}</p>
        <Button onClick={confirmError}>확인</Button>
      </div>
    </Modal>
  );
}
