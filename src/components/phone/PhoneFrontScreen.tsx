import Time from "@/components/common/time";
import { ReactNode, Suspense } from "react";
import { GiNetworkBars } from "react-icons/gi";
import { TbBattery4 } from "react-icons/tb";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/common/errorFallback";
import SuspenseFallback from "@/components/common/suspenseFallback";
import PushError from "@/components/modals/pushError";
import LoadingModal from "@/components/modals/loadingModal";

export default function PhoneFrontScreen({
  open,
  switchOpen,
  children,
}: {
  open: boolean;
  switchOpen: () => void;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute bottom-0 top-0 flex h-full w-full origin-bottom flex-col rounded-md border-2 border-black bg-slate-100 transition-transform duration-1000 ${
        open ? "[transform:rotateX(0deg)]" : "[transform:rotateX(180deg)]"
      } transform-style-preserve-3d backface-hidden flex flex-col items-center overflow-hidden p-2`}
      onClick={switchOpen}
    >
      <div className="flex h-11 w-full items-center justify-center">
        <div className="flex h-2 w-1/4 items-center justify-center rounded-full bg-black"></div>
      </div>
      <div className="flex h-full w-full flex-1 flex-col justify-center rounded-2xl bg-black p-4">
        <p className="text-md p-2 text-center text-slate-300">SHOW</p>
        <div
          className="flex h-full w-full flex-1 flex-col bg-slate-700 font-dotted text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex h-7 w-full items-center justify-between bg-white px-2">
            <GiNetworkBars color="black" />
            <span className="flex gap-2">
              <TbBattery4 color="black" size={25} className="rotate-180" />
              <Time />
            </span>
          </header>
          <div className="w-full flex-1 touch-auto">
            <ErrorBoundary fallback={<ErrorFallback />}>
              <Suspense fallback={<SuspenseFallback />}>
                <div className="relative flex h-full w-full flex-col items-center justify-center bg-white text-black">
                  {children}
                </div>
                <LoadingModal />
                <PushError />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
        <p className="p-3 text-center text-xl text-slate-300">Star23Sharp</p>
      </div>
    </div>
  );
}
