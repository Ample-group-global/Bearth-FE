"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function BearthTopBarScrollDetection({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const scrollSnapContainer = document.getElementById(
      "scroll-snap-container",
    );

    if (!scrollSnapContainer) return;

    const handleScroll = () => {
      setIsScrolled(scrollSnapContainer.scrollTop > 0);
    };

    scrollSnapContainer.addEventListener("scroll", handleScroll);

    return () =>
      scrollSnapContainer.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        "w-full h-[64px] md:h-[72px] fixed top-0 left-0 z-40 flex items-center transition-all duration-300",
        // isScrolled && "backdrop-blur-md md:backdrop-blur-none",
      )}
    >
      {children}
    </header>
  );
}
