import { useState } from "react";

export default function usePhoneScreen() {
  const [open, setOpen] = useState(false);
  function switchOpen() {
    setOpen(!open);
  }
  return {
    open,
    switchOpen,
  };
}
