import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BearthSideMenu() {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
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
            className="items-start justify-start p-4 max-w-none [&>div]:w-full"
            orientation="vertical"
          >
            <NavigationMenuList className="flex flex-col items-start text-2xl font-semibold leading-normal">
              <Link href="/about">
                <DrawerClose className="uppercase">About</DrawerClose>
              </Link>

              <div className="h-px w-full bg-black/10">&nbsp;</div>

              <Link href="/city">
                <DrawerClose className="uppercase">City</DrawerClose>
              </Link>
              <div className="h-px w-full bg-black/10">&nbsp;</div>
              <Link href="/mindmap">
                <DrawerClose className="uppercase">Mindmap</DrawerClose>
              </Link>
              <div className="h-px w-full bg-black/10">&nbsp;</div>
              <Link href="/contact">
                <DrawerClose className="uppercase">Contact</DrawerClose>
              </Link>
              <div className="h-px w-full bg-black/10">&nbsp;</div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
