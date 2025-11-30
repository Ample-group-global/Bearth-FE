import { cn } from "@/lib/utils";
import Link from "next/link";
import BearthSocialLinks from "./BearthSocialLinks";

export default function BearthFooter({
  absolute = false,
}: {
  absolute?: boolean;
}) {
  return (
    <footer
      className={cn(
        "w-full items-end justify-between pb-4 hidden md:flex text-white mt-8",
        "h-[64px] px-4 z-10",
        "bottom-0 left-0",
        absolute ? "absolute" : "fixed",
      )}
    >
      <div className="text-3xl font-black tracking-wide drop-shadow-md">
        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        <BearthSocialLinks />
      </div>
    </footer>
  );
}
