import { ChangeEvent, useState } from "react";

export type MessageInputHook = {
  text: string;
  updateText: (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
  ) => void;
};
export default function useInput(initialText?: string) {
  const [text, setText] = useState(initialText || "");
  function updateText(
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
  ) {
    setText(e.target.value);
  }
  return {
    text,
    updateText,
  };
}
