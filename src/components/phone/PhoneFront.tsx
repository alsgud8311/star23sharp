export default function PhoneFront({
  open,
  switchOpen,
}: {
  open: boolean;
  switchOpen: () => void;
}) {
  return (
    <div
      className={` [backface-visibility:hidden] w-full h-full bg-white rounded-md border-2 ${open ? " [transform:rotateX(180deg)] [perspective(800px)] [transform-style: preserve-3d]" : "[transform:rotateX(0deg)] "} border-black flex flex-col transition-transform duration-1000 absolute z-10 origin-top`}
      onClick={switchOpen}
    >
      <div className="w-full h-16 rounded-md flex justify-between ">
        <div className="w-24 border-2 rounded-md border-black border-t-0 border-l-0"></div>
        <div className="w-24 border-2 rounded-md border-black border-t-0 border-r-0"></div>
      </div>
      <div className="flex-grow justify-center items-center flex flex-col">
        <div className="w-64 h-64 rounded-full border-[10px] border-blue-300 flex justify-center items-center shadow-lg">
          <p>핸드폰을 눌러 열어보세요</p>
        </div>
      </div>
    </div>
  );
}
