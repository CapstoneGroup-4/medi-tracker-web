"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Breadcrumbs,
  BreadcrumbItem,
  Badge,
  User,
  Switch,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

import NotificationsCard from "./notifications-card";
import { MoonIcon } from "./icon";
import { SunIcon } from "./icon";
import { usePathname } from "@/hooks/route";

const namePath = [
  {
    name: ["Dashboard", "Patient List"],
    path: "/workspace/dashboard",
  },
  {
    name: ["Reports", "11"],
    path: "/workspace/reports/11",
  },
];
export default function NavigationHeaderWithTabs() {
  const pathname = usePathname();
  const path = namePath.find((item) => item.path === pathname)?.name;
  return (
    <div className="w-full">
      <Navbar
        classNames={{
          base: "py-2 justify-between border-b border-[#E4EAF1] lg:bg-transparent lg:backdrop-filter-none",
          wrapper: "max-w-full",
          item: "data-[active=true]:text-primary",
        }}
        height="60px"
      >
        <Breadcrumbs className="hidden lg:flex" radius="full">
          {path?.map((item, index) => (
            <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
          ))}
        </Breadcrumbs>

        {/* Right Menu */}
        <NavbarContent
          className="ml-auto h-12 max-w-fit items-center gap-0"
          justify="end"
        >
          <NavbarItem className="mr-2">
            <Switch
              defaultSelected
              size="lg"
              color="primary"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <SunIcon className={className} />
                ) : (
                  <MoonIcon className={className} />
                )
              }
            ></Switch>
          </NavbarItem>

          <NavbarItem className="flex mr-4">
            <Popover offset={12} placement="bottom-end">
              <PopoverTrigger>
                <Button
                  disableRipple
                  isIconOnly
                  radius="full"
                  className="overflow-visible bg-[#EFF4FB]"
                  variant="flat"
                >
                  <Badge
                    color="danger"
                    content="5"
                    showOutline={false}
                    size="md"
                  >
                    <Icon
                      className="text-default-500"
                      icon="solar:bell-linear"
                      width={22}
                    />
                  </Badge>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
                <NotificationsCard className="w-full shadow-none" />
              </PopoverContent>
            </Popover>
          </NavbarItem>
          {/* User Menu */}
          <NavbarItem className="px-2">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <button className="  outline-none transition-transform">
                  <User
                    name="John Doe"
                    description="StaffNo: 1234567890"
                    classNames={{
                      base: "flex-row-reverse",
                      wrapper: "items-end",
                    }}
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29526708c",
                    }}
                  />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">johndoe@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Dashboard
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem isActive>
            <Link
              aria-current="page"
              className="w-full"
              color="primary"
              href="#"
            >
              Deployments
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Analytics
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Team
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Settings
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
