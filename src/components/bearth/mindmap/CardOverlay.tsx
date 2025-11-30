import { X } from "lucide-react";
import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "../../ui/button";

interface CardContent {
  title: string;
  content: ReactNode;
}

interface CardOverlayProps {
  cardContent: CardContent;
  onClose: () => void;
}

export function CardOverlay({ cardContent, onClose }: CardOverlayProps) {
  return (
    <div className="absolute inset-0 bg-[#EAE8E4] z-50 overflow-y-auto flex flex-col lg:flex-row rounded-2xl shadow-[3px_3px_4px_0px_#00000040_inset]">
      <div className="p-6 md:p-12 flex-1">
        <X
          aria-label="Close overlay"
          role="button"
          className="w-12 h-12 md:w-16 md:h-16 troke-3 text-[#1E2A3B] absolute top-4 right-4 p-2"
          onClick={onClose}
        />

        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E2A3B] mb-6 md:mb-8">
            {cardContent.title}
          </h1>

          <hr className="border-t-2 border-[#1E2A3B] mb-8 md:mb-12" />

          {cardContent.content}
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <Image
          src="/assets/placeholder.svg"
          alt="Placeholder"
          width={500}
          height={500}
          className="aspect-square w-[500px] bg-white border border-gray-400"
        />
      </div>
    </div>
  );
}
