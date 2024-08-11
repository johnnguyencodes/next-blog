"use client";

import * as React from "react";
import Link from "next/link";
import { POSTS } from "@/lib/constants";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "./icons";
import { ModeToggle } from "./ui/mode-toggle";

export function MainNav({ className }: { className?: string }) {
  return (
    <div className="sticky top-0 mx-auto w-full border-b border-lightmode-black bg-lightmode-white px-2.5 dark:border-darkmode-white dark:bg-darkmode-black md:px-20">
      <div
        className={cn(
          "z-50 mx-auto flex max-w-screen-xl flex-col items-start justify-start py-6 md:flex-row md:items-center md:justify-between md:px-20",
          className
        )}
      >
        <Link href={"/"}>
          <div className="flex w-32 items-center justify-between text-lightmode-red hover:text-lightmode-red-700 dark:text-darkmode-red dark:hover:text-darkmode-red-300">
            <Icons.logo className="h-6 w-6" />
            <p className="font-semibold">John Nguyen</p>
          </div>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex w-20 items-center justify-between">
          <ModeToggle />
          <Link href="/rss">
            <Icons.rss className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
