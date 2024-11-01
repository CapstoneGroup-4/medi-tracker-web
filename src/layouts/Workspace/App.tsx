"use client";

import React from "react";
import {
    Avatar,
    Button,
    ScrollShadow,
    Spacer,
    Tooltip,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "usehooks-ts";

import { AcmeLogo } from "./acme";
import { sectionItemsWithTeams } from "./sidebar-items";
import { cn } from "./cn";

import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

/**
 *  This example requires installing the `usehooks-ts` package:
 * `npm install usehooks-ts`
 *
 * import {useMediaQuery} from "usehooks-ts";
 *
 * 💡 TIP: You can use the usePathname hook from Next.js App Router to get the current pathname
 * and use it as the active key for the Sidebar component.
 *
 * ```tsx
 * import {usePathname} from "next/navigation";
 *
 * const pathname = usePathname();
 * const currentPath = pathname.split("/")?.[1]
 *
 * <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />
 * ```
 */
export default function WorkspaceLayout() {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const isCompact = isCollapsed || isMobile;

    const onToggle = React.useCallback(() => {
        setIsCollapsed((prev) => !prev);
    }, []);

    return (
        <div className="flex h-dvh w-full overflow-hidden">
            <div
                className={cn(
                    "relative bg-primary flex h-full w-72 flex-col !border-r-small border-divider p-4 transition-width",
                    {
                        "w-16 items-center px-2 py-6": isCompact,
                    }
                )}
            >
                <div
                    className={cn(
                        "flex items-center gap-3 px-3",

                        {
                            "justify-center gap-0": isCompact,
                        }
                    )}
                >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                        <AcmeLogo className="text-background" />
                    </div>
                    <span
                        className={cn(
                            "text-small text-white font-bold uppercase opacity-100",
                            {
                                "w-0 opacity-0": isCompact,
                            }
                        )}
                    >
                        MediTracker
                    </span>
                </div>
                {/* <div className="flex items-center gap-3 px-3">
          <Avatar
            isBordered
            className="flex-none"
            size="sm"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
          <div
            className={cn("flex max-w-full flex-col", { hidden: isCompact })}
          >
            <p className="truncate text-small font-medium text-default-600">
              John Doe
            </p>
            <p className="truncate text-tiny text-default-400">
              Product Designer
            </p>
          </div>
        </div> */}
                <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                    <Sidebar
                        defaultSelectedKey="/workspace"
                        isCompact={isCompact}
                        items={sectionItemsWithTeams}
                    />
                </ScrollShadow>
                <Spacer y={2} />
                <div
                    className={cn("mt-auto flex flex-col", {
                        "items-center": isCompact,
                    })}
                >
                    <Tooltip
                        content={isCompact ? "Expand Sidebar" : "Collapse Sidebar"}
                        isDisabled={!isCompact}
                        placement="right"
                    >
                        <Button
                            className={cn(
                                "justify-center text-white data-[hover=true]:text-foreground"
                            )}
                            isIconOnly={isCompact}
                            variant="flat"
                            onClick={onToggle}
                        >
                            <Icon
                                className="text-white"
                                height={24}
                                icon="solar:sidebar-minimalistic-outline"
                                width={24}
                            />
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div className="w-full flex-1 flex-col p-4">
                <header className="flex items-center gap-3 rounded-medium border-small border-divider p-4">
                    <Button isIconOnly size="sm" variant="light" onPress={onToggle}>
                        <Icon
                            className="text-default-500"
                            height={24}
                            icon="solar:sidebar-minimalistic-outline"
                            width={24}
                        />
                    </Button>
                    <h2 className="text-medium font-medium text-default-700">Overview</h2>
                </header>
                <main className="mt-4 h-full w-full overflow-visible">
                    <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium border-small border-divider">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}