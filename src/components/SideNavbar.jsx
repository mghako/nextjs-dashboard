"use client";
import React, { useEffect, useState } from "react";
import { Nav } from "@/components/ui/nav";
import {
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    ShoppingCart,
    User2,
  } from "lucide-react"
import { Button } from "./ui/button";
import { useWindowDimensions } from '@/components/useWindowDimensions';
const SideNavbar = () => {
    const {width} = useWindowDimensions();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const mobileWidth = width < 768;
    const toggleSideNavbar = () => {
        setIsCollapsed(prevState => !prevState);
    }

    return (
        <div className="relative min-w-[90px] border-r px-1 pb-10 pt-24">
            {!mobileWidth && 
                (<div className="absolute right-[-20px] top-7">
                    <Button
                        onClick={toggleSideNavbar} 
                        variant="secondary" className="rounded-full p-2 transition-all">
                        {
                            isCollapsed ? <ChevronRight /> : <ChevronLeft />
                        }
                        
                    </Button>
                </div>)
            }
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
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
                    href: '/dashboard/users'
                },
                {
                    title: "Sample Form",
                    label: "",
                    icon: ShoppingCart,
                    variant: "default",
                    href: '/dashboard/sample-form'
                },
                ]}
          />
        </div>
    )
}

export default SideNavbar;