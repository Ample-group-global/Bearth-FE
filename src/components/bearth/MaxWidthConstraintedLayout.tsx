import { cn } from "@/lib/utils";
import { createElement } from "react";

export default function MaxWidthConstraintedLayout({
  children,
  className,
  outerDivClassName,
  fullHeight = false,
  paddingHeader = false,
  paddingFooter = false,
  as = "div",
}: {
  children: React.ReactNode;
  as?: "div" | "main" | "section";
  className?: string;
  outerDivClassName?: string;
  fullHeight?: boolean;
  paddingHeader?: boolean;
  paddingFooter?: boolean;
}) {
  return (
    <div className={cn(fullHeight && "min-h-screen", outerDivClassName)}>
      {createElement(
        as,
        {
          className: cn(
            "max-w-[1440px] mx-auto",
            paddingHeader && "pt-[72px]",
            paddingFooter && "pb-[64px]",
            className,
          ),
        },
        children,
      )}
    </div>
  );
}
