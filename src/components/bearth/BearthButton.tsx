import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BearthButton({
  children,
  href,
  className,
  type = "primary",
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
}) {
  return (
    <Link href={href}>
      <Button
        onClick={onClick}
        className={cn(
          "px-4 py-2 rounded-sm font-figtree uppercase hover:brightness-105",
          type === "primary" && "bg-accent text-accent-foreground",
          type === "secondary" && "bg-white hover:bg-white/80 text-black",
          className,
        )}
      >
        {children}
        <Badge
          className={cn(
            `rounded-sm p-0.5`,
            type === "primary" && "bg-foreground text-background",
            type === "secondary" && "bg-primary text-black",
          )}
        >
          <ArrowRight className="h-6 w-6 stroke-3" />
        </Badge>
      </Button>
    </Link>
  );
}
