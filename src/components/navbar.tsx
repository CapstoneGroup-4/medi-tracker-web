import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import { usePathname } from "@/hooks/route";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar
      classNames={{
        base: "px-2 pt-2 bg-white",
      }}
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-3.5"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-lg text-primary">MediTracker</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " justify="center">
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <NavbarItem key={item.href} isActive={isActive}>
                <Link
                  className={clsx(
                    "data-[active=true]:font-bold decoration-2",
                    isActive ? "text-primary" : "text-default-500"
                  )}
                  // color={isActive ? "primary" : "foreground"}
                  underline={isActive ? "always" : "hover"}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </div>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-[18px]">
          <Button
            as={Link}
            href="/register?type=USER&step=1"
            radius="sm"
            color="primary"
            variant="bordered"
          >
            Sign up
          </Button>
          <Button as={Link} href="/login" radius="sm" color="primary">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
