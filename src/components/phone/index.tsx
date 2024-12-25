import PhoneNumberPad from "./PhoneNumberPad";
import { Outlet } from "@tanstack/react-router";
import PhoneFrontScreen from "./PhoneFrontScreen";
import PhoneFront from "./PhoneFront";
import usePhoneScreen from "../../hooks/usePhoneScreen";

export default function Phone() {
  const { open, switchOpen } = usePhoneScreen();
  return (
    <div
      className={`absolute h-[95%] w-[95%] min-w-[360px] max-w-[380px] -translate-y-full transition-transform duration-1000 ${open ? "translate-y-0 overflow-hidden" : ""}`}
    >
      <PhoneFront open={open} switchOpen={switchOpen} />
      <PhoneFrontScreen open={open} switchOpen={switchOpen}>
        <Outlet />
      </PhoneFrontScreen>
      <PhoneNumberPad />
    </div>
  );
}
