import loadingSpinner from "@assets/loading.gif";

export default function SuspenseFallback() {
  return (
    <div className="h-full w-full items-center justify-center gap-5 text-xl">
      <img src={loadingSpinner} alt="loading" className="w-1/3" />
      <p>로딩중..</p>
    </div>
  );
}
