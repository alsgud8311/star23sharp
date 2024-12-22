export default function PhoneFront({
  open,
  switchOpen,
}: {
  open: boolean;
  switchOpen: () => void;
}) {
  return (
    <div
      className={`h-full w-full rounded-md border-2 bg-white [backface-visibility:hidden] ${open ? "[perspective(800px)] [transform-style: preserve-3d] [transform:rotateX(180deg)]" : "[transform:rotateX(0deg)]"} absolute z-10 flex origin-top flex-col border-black transition-transform duration-1000`}
      onClick={switchOpen}
    >
      <div className="flex h-16 w-full justify-between rounded-md">
        <div className="w-24 rounded-md border-2 border-l-0 border-t-0 border-black"></div>
        <div className="w-24 rounded-md border-2 border-r-0 border-t-0 border-black"></div>
      </div>
      <div className="flex flex-grow flex-col items-center justify-center">
        <div className="flex h-64 w-64 items-center justify-center rounded-full border-[10px] border-blue-300 shadow-lg">
          <p>핸드폰을 눌러 열어보세요</p>
        </div>
      </div>
    </div>
  );
}
