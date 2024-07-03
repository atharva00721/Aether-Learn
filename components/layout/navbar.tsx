"use client";
import { LogIn, LogOut, Menu, NotebookTabs } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";
import { useRouter } from "next/navigation";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#benefits",
    label: "Benefits",
  },
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#courses",
    label: "Courses",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
];

export const Navbar = () => {
  const { isSignedIn } = useUser();

  // In case the user signs out while on the page.

  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/UserDashboard");
  };
  return (
    <header className=" bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60  w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2">
      <Link href="/" className="font-bold text-lg flex items-center">
        <NotebookTabs className="rounded-lg w-9 h-9 mr-2 border-none text-foreground " />
        Aether Learn
      </Link>

      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <NotebookTabs className="rounded-lg w-9 h-9 mr-2 border text-foreground" />
                    Aether Learn
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              {(isSignedIn && (
                <div className="flex gap-1 cursor-pointer w-full flex-col">
                  <Button
                    asChild
                    size="sm"
                    className="flex gap-1 cursor-pointer w-full justify-between"
                    onClick={handleClick}
                  >
                    <div>
                      DashBoard
                      <NotebookTabs size={18} />
                    </div>
                  </Button>

                  <SignOutButton>
                    <Button
                      size="sm"
                      className="flex gap-1 cursor-pointer w-full justify-between"
                    >
                      <div>Sign out</div>
                      <LogOut size={18} />
                    </Button>
                  </SignOutButton>
                </div>
              )) || (
                <SignInButton>
                  <Button
                    asChild
                    size="sm"
                    className="flex gap-1 cursor-pointer w-full justify-between"
                  >
                    <div>
                      Log In
                      <LogIn size={18} />
                    </div>
                  </Button>
                </SignInButton>
              )}
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex gap-1">
        <ToggleTheme />
        {(isSignedIn && (
          <>
            <Button
              asChild
              size="sm"
              className="flex gap-1 cursor-pointer"
              onClick={handleClick}
            >
              <div>DashBoard</div>
            </Button>
            <div>
              <SignOutButton>
                <Button size="sm" className="flex gap-1 cursor-pointer">
                  Sign out
                </Button>
              </SignOutButton>
            </div>
          </>
        )) || (
          <Button
            asChild
            size="sm"
            className="flex gap-1 cursor-pointer"
            onClick={handleClick}
          >
            <div>Log In</div>
          </Button>
        )}
      </div>
    </header>
  );
};
