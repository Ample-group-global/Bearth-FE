import { cn } from "@/lib/utils";
import { createElement } from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5";
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
}

export default function Heading({
  children,
  type,
  as,
  className,
}: HeadingProps) {
  return createElement(
    as || type,
    {
      className: cn(
        "text-shadow-lg",
        type === "h1" && "mb-4 text-4xl hlg:text-8xl lg:text-6xl font-black",
        type === "h2" && "text-lg lg:text-[64px] font-semibold",
        type === "h3" && "text-[24px] lg:text-[48px]",
        type === "h4" && "text-shadow-none font-bold text-base lg:text-[24px]",
        type === "h5" && "text-shadow-none font-semibold text-base",
        className,
      ),
    },
    children,
  );
}
