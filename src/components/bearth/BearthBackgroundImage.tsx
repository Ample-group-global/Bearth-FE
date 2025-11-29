import Image from "next/image";

export default function BearthBackgroundImage() {
  return (
    <div className="absolute inset-0 -z-1">
      <Image
        src="/assets/bg.jpg"
        alt=""
        width={2048}
        height={1262}
        loading="eager"
        fetchPriority="high"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
    </div>
  );
}
