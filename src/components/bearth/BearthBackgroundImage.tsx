import Image from "next/image";

export default function BearthBackgroundImage() {
  return (
    <div className="fixed inset-0 w-screen h-screen -z-1">
      <Image
        src="/assets/bg.jpg"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="h-full w-full object-cover"
        fill
        sizes="100vw"
      />
      {/* Darken the image */}
      {/* <div className="fixed inset-0 bg-black/70" /> */}
    </div>
  );
}
