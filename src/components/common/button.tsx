import { ReactNode } from "react";

export default function Button({
  children,
  type = "button",
  onClick,
  ...props
}: {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border-2 border-black py-3 px-8 rounded-xl cursor-pointer hover:bg-slate-200 transform duration-300"
      {...props}
    >
      {children}
    </button>
  );
}
