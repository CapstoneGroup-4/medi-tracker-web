import { Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import { type SidebarItem, SidebarItemType } from "./sidebar";
import TeamAvatar from "./team-avatar";

/**
 * Please check the https://nextui.org/docs/guide/routing to have a seamless router integration
 */

export const sectionItems: SidebarItem[] = [
  {
    key: "overview",
    title: "Overview",
    items: [
      {
        key: "/workspace/dashboard",
        icon: "mingcute:home-3-fill",
        title: "Dashboard",
      },
      {
        key: "/workspace/reports",
        icon: "mingcute:chart-pie-2-fill",
        title: "Reports",
      },
      {
        key: "/workspace/reminders",
        icon: "mingcute:calendar-fill",
        title: "Reminders",
        endContent: (
          <div className="bg-[#F5A525] rounded-full w-5 h-5 text-white flex items-center justify-center text-xs">
            <span> 2</span>
          </div>
        ),
      },
      {
        key: "/workspace/settings",
        icon: "mingcute:settings-3-fill",
        title: "Settings",
      },
    ],
  },
];

export const sectionItemsWithTeams: SidebarItem[] = [
  ...sectionItems,
  // {
  //   key: "your-teams",
  //   title: "Your Teams",
  //   items: [
  //     {
  //       key: "nextui",
  //       href: "#",
  //       title: "NextUI",
  //       startContent: <TeamAvatar name="Next UI" />,
  //     },
  //     {
  //       key: "tailwind-variants",
  //       href: "#",
  //       title: "Tailwind Variants",
  //       startContent: <TeamAvatar name="Tailwind Variants" />,
  //     },
  //     {
  //       key: "nextui-pro",
  //       href: "#",
  //       title: "NextUI Pro",
  //       startContent: <TeamAvatar name="NextUI Pro" />,
  //     },
  //   ],
  // },
];
