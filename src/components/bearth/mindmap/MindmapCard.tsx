import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MindmapCardProps {
  number: number;
  title: string | ReactNode;
  onClick: () => void;
  className?: string;
  numberClassName?: string;
  titleClassName?: string;
}

export function MindmapCard({
  number,
  title,
  onClick,
  className,
  numberClassName,
  titleClassName,
}: MindmapCardProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "rounded-2xl font-semibold bg-secondary-foreground hover:bg-secondary-foreground/80 p-4 md:p-6 flex flex-col justify-between md:justify-end items-start transition-colors h-auto aspect-square md:aspect-auto shadow-[3px_3px_4px_0px_#00000040_inset]",
        className,
      )}
    >
      <span
        className={cn(
          "mb-1 md:mb-2 text-4xl lg:text-6xl lg:text-8xl",
          numberClassName,
        )}
      >
        {number}
      </span>
      <h2
        className={cn(
          "leading-tight self-end md:self-start text-right md:text-left text-2xl md:text-4xl lg:text-5xl lg:text-6xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </Button>
  );
}
