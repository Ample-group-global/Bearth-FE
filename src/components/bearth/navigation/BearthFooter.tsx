import { SiDiscord, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function BearthFooter() {
  return (
    <footer className="w-full items-end justify-between pb-4 hidden md:flex text-white mt-8">
      <div className="text-3xl font-black tracking-wide drop-shadow-md">
        Contact
      </div>

      <div className="flex items-center gap-4">
        <Link href="#" className="transition-transform hover:scale-110">
          <SiDiscord className="h-8 w-8 drop-shadow-md" />
          <span className="sr-only">Discord</span>
        </Link>
        <Link href="#" className="transition-transform hover:scale-110">
          <SiInstagram className="h-8 w-8 drop-shadow-md" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link href="#" className="transition-transform hover:scale-110">
          <SiX className="h-8 w-8 drop-shadow-md" />
          <span className="sr-only">X (Twitter)</span>
        </Link>
      </div>
    </footer>
  );
}
