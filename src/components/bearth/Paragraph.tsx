import { cn } from "@/lib/utils";
import { createElement } from "react";

export default function Paragraph({
  children,
  className,
  type = "normal",
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  type?: "normal" | "large" | "large2" | "normal2";
  as?: "p" | "div";
}) {
  return createElement(
    as || "p",
    {
      className: cn(
        "leading-tight tracking-tight font-medium",
        type === "normal" && "text-xs md:text-base",
        type === "large" && "text-xs md:text-2xl",
        type === "large2" && "text-base md:text-2xl",
        type === "normal2" && "text-xs md:text-base leading-[1.2]",
        className,
      ),
    },
    children,
  );
}
