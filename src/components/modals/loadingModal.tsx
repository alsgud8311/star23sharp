import { useLoadingStore } from "@/store/useLoadingStore";
import loadingSpinner from "@assets/loading.gif";

export default function LoadingModal() {
  const loading = useLoadingStore((state) => state.isLoading);
  return (
    <>
      {loading && (
        <>
          <div className="absolute left-0 top-0 z-40 h-full w-full bg-black opacity-30" />
          <div className="absolute left-0 top-0 z-40 flex h-full w-full items-center justify-center">
            <div className="z-50 flex w-full flex-col items-center justify-center gap-5">
              <img src={loadingSpinner} alt="loading" className="w-1/3" />
              <p className="text-xl">로딩중...</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
