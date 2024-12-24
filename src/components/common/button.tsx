import { ReactNode } from "react";

export default function Button({
  children,
  type = "button",
  onClick,
  disabled,
  ...props
}: {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="transform cursor-pointer rounded-xl border-2 border-black px-8 py-3 duration-300 hover:bg-slate-200"
      disabled={disabled ?? false}
      {...props}
    >
      {children}
    </button>
  );
}
