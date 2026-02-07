import { ReactNode } from "react";

interface OutlineButtonProps {
  children: ReactNode;
  className?: string;
}

export default function OutlineButton({
  children,
  className = "",
}: OutlineButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center gap-3
        px-10 py-4
        border border-[#223614]
        text-[#223614]
        tracking-wide
        hover:bg-[#223614]
        hover:text-white
        transition-all
        duration-500
        ease-in-out
        group
        ${className}
      `}
    >
      {children}
      <span className="transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}
