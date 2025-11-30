import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BearthButton() {
  return (
    <Link href="/about">
      <Button className="bg-accent text-accent-foreground px-4 py-2 rounded-sm font-figtree uppercase hover:brightness-105">
        Join the Journey
        <Badge className="bg-foreground text-background rounded-sm p-0.5">
          <ArrowRight className="h-6 w-6 stroke-3" />
        </Badge>
      </Button>
    </Link>
  );
}
