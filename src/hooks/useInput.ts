import { ChangeEvent, useState } from "react";

export type MessageInputHook = {
  text: string;
  updateText: (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
  ) => void;
};
export default function useInput(
  initialText?: string,
  test?: (val: string) => boolean,
) {
  const [text, setText] = useState(initialText || "");
  function updateText(
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
  ) {
    if (test) {
      if (test(e.target.value)) {
        setText(e.target.value);
        return;
      }
      return;
    }
    setText(e.target.value);
  }
  return {
    text,
    updateText,
  };
}
