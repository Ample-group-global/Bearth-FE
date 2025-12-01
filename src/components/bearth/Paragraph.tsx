import { cn } from "@/lib/utils";

export default function Paragraph({
  children,
  className,
  type = "normal",
}: {
  children: React.ReactNode;
  className?: string;
  type?: "normal" | "large" | "large2" | "normal2";
}) {
  return (
    <p
      className={cn(
        "leading-tight tracking-tight font-medium",
        type === "normal" && "text-xs md:text-base",
        type === "large" && "text-xs md:text-2xl",
        type === "large2" && "text-base md:text-2xl",
        type === "normal2" && "text-xs md:text-base leading-[1.2]",
        className,
      )}
    >
      {children}
    </p>
  );
}
