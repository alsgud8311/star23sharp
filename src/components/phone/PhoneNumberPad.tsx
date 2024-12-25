import { FcEndCall } from "react-icons/fc";
import { IoMdMusicalNotes } from "react-icons/io";
import {
  MdCallEnd,
  MdOutlineCameraAlt,
  MdOutlineLocalPostOffice,
  MdPhone,
} from "react-icons/md";

export default function PhoneNumberPad() {
  return (
    <div
      className={`absolute -bottom-full z-0 flex h-full w-full flex-col rounded-md border-2 border-black bg-gray-100 shadow-md shadow-black duration-700`}
    >
      <div className="flex h-16 w-full justify-between rounded-md bg-white">
        <div className="w-24 rounded-md border-2 border-l-0 border-t-0 border-black shadow-2xl"></div>
        <div className="w-24 rounded-md border-2 border-r-0 border-t-0 border-black shadow-2xl"></div>
      </div>
      <div className="flex flex-grow flex-col items-center justify-center p-4">
        <div className="flex h-full w-full flex-col items-center gap-14 rounded-lg border-2 border-black pt-10">
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-black">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white shadow-md">
              <span>Mate</span>
            </div>
            <MdOutlineLocalPostOffice className="absolute top-3" size={25} />
            <MdPhone className="absolute right-3" size={25} />
            <MdOutlineCameraAlt className="absolute left-3" size={25} />
            <IoMdMusicalNotes className="absolute bottom-3" size={25} />
          </div>
          <div className="grid w-4/5 max-w-xs grid-cols-3 gap-2">
            <button className="flex h-12 items-center justify-center rounded-xl border-2 border-black bg-white text-2xl font-bold transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200">
              <MdCallEnd color="green" size={30} />
            </button>
            <button className="flex h-12 items-center justify-center rounded-xl border-2 border-black bg-white text-lg font-bold shadow-lg transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200">
              지음/취소
            </button>
            <button className="flex h-12 items-center justify-center rounded-xl border-2 border-black bg-white text-2xl font-bold">
              <FcEndCall size={30} />
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((key) => (
              <button
                key={key}
                className="flex h-12 items-center justify-center rounded-xl border-2 border-black bg-white text-2xl font-bold shadow-xl"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
