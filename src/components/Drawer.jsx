import {
    Button,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerAction,
} from "keep-react";
import { Books, House, List, Question } from "phosphor-react";

import { Book, Users, Calendar, Gear } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
import { SidebarHeader, SidebarPrimaryNavLinks, SidebarSecondaryNavLinks } from "./Sidebar";

 
export const SidebarTrigger = () => {
    return (
        <Drawer position='left'>
            <DrawerAction asChild>
                <div className='px-3 py-2 rounded-md hover:bg-gray-100 sm:hidden'>
                    <List size={24} />
                </div>
            </DrawerAction>
            <DrawerContent className='block'>
                <div className='p-6 px-8 space-y-10 flex flex-col h-screen'>

                    <SidebarHeader></SidebarHeader>

                    <SidebarPrimaryNavLinks></SidebarPrimaryNavLinks>

                    <SidebarSecondaryNavLinks></SidebarSecondaryNavLinks>
                </div>
            </DrawerContent>
        </Drawer>
    );
};
