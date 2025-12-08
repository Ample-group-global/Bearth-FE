import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BearthBackgroundImage({
  src,
  absolute = false,
  darken = false,
  containerClassName,
  imageClassName,
}: {
  src: string;
  absolute?: boolean;
  darken?: boolean;
  containerClassName?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "inset-0 -z-1",
        absolute ? "absolute w-full h-full" : "fixed w-screen h-screen",
        containerClassName,
      )}
    >
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className={cn("h-full w-full object-cover", imageClassName)}
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
