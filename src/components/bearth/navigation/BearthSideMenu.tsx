import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { socialLinks } from "@/config";
import BearthSocialLinks from "./BearthSocialLinks";

export function BearthSideMenuLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="leading-[50px] w-full after:content-[''] after:block after:h-px after:w-full after:bg-black/10"
    >
      {children}
    </Link>
  );
}

export function BearthSideMenu() {
  return (
    <Drawer direction="left">
      <DrawerTrigger role="button" aria-label="Open Menu">
        <MenuIcon className="size-8 md:size-10 text-background" />
      </DrawerTrigger>
      <DrawerContent aira-describedby="Bearth Side Menu">
        <DrawerTitle className="hidden">Bearth</DrawerTitle>
        <DrawerHeader className="flex flex-row items-center justify-between">
          <Link href="/">
            <DrawerClose>
              <Image
                className="size-10 md:size-12"
                src="/assets/icon.png"
                alt="Bearth Icon"
                width={48}
                height={48}
              />
            </DrawerClose>
          </Link>
          <DrawerClose>
            <XIcon className="size-8 md:size-10" />
          </DrawerClose>
        </DrawerHeader>

        <div>
          <NavigationMenu
            className="items-start justify-start px-8 max-w-none [&>div]:w-full"
            orientation="vertical"
          >
            <NavigationMenuList className="flex flex-col items-start text-2xl font-semibold leading-normal gap-0">
              <BearthSideMenuLink href="/about">
                <DrawerClose className="uppercase">About</DrawerClose>
              </BearthSideMenuLink>

              {/* <BearthSideMenuLink href="/city">
                <DrawerClose className="uppercase">City</DrawerClose>
              </BearthSideMenuLink> */}

              <BearthSideMenuLink href="/mindmap">
                <DrawerClose className="uppercase">Mindmap</DrawerClose>
              </BearthSideMenuLink>

              <BearthSideMenuLink href="/contact">
                <DrawerClose className="uppercase">Contact</DrawerClose>
              </BearthSideMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <DrawerFooter className="flex flex-row items-center justify-between p-8">
          <div className="flex flex-row gap-4 filter brightness-0">
            <BearthSocialLinks />
          </div>
          <div className="flex flex-col gap-1 text-[8px]">
            <p>BEARTH LABS, INC ⓒ 2025</p>
            <p className="underline">
              <Link href={socialLinks.inquiries}>official@imbearth.com</Link>
            </p>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
