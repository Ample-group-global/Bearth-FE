import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BearthButton() {
  return (
    <Button className="bg-accent text-accent-foreground px-4 py-2 rounded-sm font-figtree uppercase">
      Join the Journey
      <Badge className="bg-foreground text-background rounded-sm p-0.5">
        <ArrowRight className="h-6 w-6 stroke-3" />
      </Badge>
    </Button>
  );
}
