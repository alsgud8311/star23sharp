import PushModal from "@/components/common/pushModal";
import { useLoadingStore } from "@/store/useLoadingStore";
import loadingSpinner from "@assets/loading.gif";

export default function LoadingModal() {
  const loading = useLoadingStore((state) => state.isLoading);
  return (
    <PushModal modal={loading}>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <img src={loadingSpinner} alt="loading" className="w-1/3" />
        <p>로딩중...</p>
      </div>
    </PushModal>
  );
}
