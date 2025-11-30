import { cn } from "@/lib/utils";
import { createElement } from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  type: "h1" | "h2" | "h3";
  as?: "h1" | "h2" | "h3";
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
        type === "h1" && "text-4xl lg:text-8xl font-black",
        type === "h2" && "text-lg lg:text-[64px] font-semibold",
        type === "h3" && "text-[24px] lg:text-[48px]",
        className,
      ),
    },
    children,
  );
}
