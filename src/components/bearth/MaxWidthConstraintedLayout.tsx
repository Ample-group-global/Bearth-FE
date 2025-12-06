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
  slotOutside,
}: {
  children: React.ReactNode;
  as?: "div" | "main" | "section";
  className?: string;
  outerDivClassName?: string;
  fullHeight?: boolean;
  paddingHeader?: boolean;
  paddingFooter?: boolean;
  slotOutside?: React.ReactNode;
}) {
  return (
    <div className={cn(fullHeight && "min-h-screen", outerDivClassName)}>
      {createElement(
        as,
        {
          className: cn(
            "max-w-[1440px] mx-auto px-4 lg:px-8",
            paddingHeader && "pt-[72px]",
            paddingFooter && "pb-8 md:pb-[64px]",
            className,
          ),
        },
        children,
      )}
      {slotOutside}
    </div>
  );
}
