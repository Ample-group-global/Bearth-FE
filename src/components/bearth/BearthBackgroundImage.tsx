import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BearthBackgroundImage({
  absolute = false,
  darken = false,
}: {
  absolute?: boolean;
  darken?: boolean;
}) {
  return (
    <div
      className={cn(
        "inset-0 w-screen h-screen -z-1",
        absolute ? "absolute" : "fixed",
      )}
    >
      <Image
        src="/assets/bg.png"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="h-full w-full object-cover"
        fill
        sizes="100vw"
      />
      {/* Darken the image */}
      {darken && (
        <div
          className={cn("inset-0 bg-black/70", absolute ? "absolute" : "fixed")}
        />
      )}
    </div>
  );
}
