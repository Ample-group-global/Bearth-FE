import Link from "next/link";
import Image from "next/image";
import BearthDesktopNavigationBar from "./BearthDesktopNavigationBar";
import { BearthSideMenu } from "./BearthSideMenu";

export default function BearthTopBar() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="pl-2">
        <Link href="/">
          <Image
            src="/assets/icon.png"
            alt="Bearth Icon"
            width={48}
            height={48}
          />
        </Link>
      </div>

      <div className="flex grow items-center justify-center">
        <BearthDesktopNavigationBar className="hidden md:flex" />
      </div>

      <div className="pr-2 md:hidden flex items-center justify-center">
        <BearthSideMenu />
      </div>
    </div>
  );
}
