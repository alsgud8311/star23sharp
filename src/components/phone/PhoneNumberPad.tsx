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
      className={`w-full h-full rounded-md border-2 border-black bg-gray-100 flex flex-col duration-700 z-0 shadow-md shadow-black`}
    >
      <div className="w-full h-16 rounded-md flex bg-white justify-between ">
        <div className="w-24 border-2 rounded-md border-black border-t-0 border-l-0 shadow-2xl"></div>
        <div className="w-24 border-2 rounded-md border-black border-t-0 border-r-0 shadow-2xl"></div>
      </div>
      <div className="flex-grow justify-center items-center flex flex-col p-4">
        <div className="w-full h-full border-2 border-black rounded-lg flex flex-col items-center gap-14 pt-10">
          <div className="w-40 h-40 border rounded-full border-black flex justify-center items-center relative">
            <div className="w-16 h-16 bg-black rounded-full flex justify-center items-center text-white shadow-md">
              <span>Mate</span>
            </div>
            <MdOutlineLocalPostOffice className="absolute top-3" size={25} />
            <MdPhone className="absolute right-3" size={25} />
            <MdOutlineCameraAlt className="absolute left-3" size={25} />
            <IoMdMusicalNotes className="absolute bottom-3" size={25} />
          </div>
          <div className="grid grid-cols-3 gap-2 w-4/5 max-w-xs">
            <button
              className="bg-white border-2 border-black rounded-xl
                                 h-12 text-2xl font-bold
                                 flex items-center justify-center
                                 hover:bg-gray-100 active:bg-gray-200
                                 transition-colors duration-200"
            >
              <MdCallEnd color="green" size={30} />
            </button>
            <button
              className="bg-white border-2 border-black rounded-xl
                                 h-12 text-lg font-bold
                                 shadow-lg
                                 flex items-center justify-center
                                 hover:bg-gray-100 active:bg-gray-200
                                 transition-colors duration-200"
            >
              지음/취소
            </button>
            <button
              className="bg-white border-2 border-black rounded-xl
                                 h-12 text-2xl font-bold
                                 flex items-center justify-center
                                 "
            >
              <FcEndCall size={30} />
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((key) => (
              <button
                key={key}
                className="bg-white border-2 border-black rounded-xl
                                 h-12 text-2xl font-bold shadow-xl
                                 flex items-center justify-center
                                 "
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
