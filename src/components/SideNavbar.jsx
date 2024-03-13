"use client";
import React, { useState } from "react";
import { Nav } from "@/components/ui/nav";
import {
    LayoutDashboard,
    ShoppingCart,
    User2,
  } from "lucide-react"

const SideNavbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    return (
        <div>
            <Nav
                isCollapsed={false}
                links={[
                {
                    title: "Dashboard",
                    label: "",
                    icon: LayoutDashboard,
                    variant: "default",
                    href: '/dashboard'
                },
                {
                    title: "Users",
                    label: "",
                    icon: User2,
                    variant: "default",
                    href: '/dashboard/old-items-registration'
                },
                {
                    title: "Old Items Registration",
                    label: "",
                    icon: ShoppingCart,
                    variant: "default",
                    href: '/dashboard/old-items-registration'
                },
                ]}
          />
        </div>
    )
}

export default SideNavbar;