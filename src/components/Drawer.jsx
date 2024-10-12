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
const adminNavItems = [
    { name: "Dashboard", icon: House, href: "/dashboard", active: true },
    { name: "Books", icon: Books, href: "/books" },
    { name: "Members", icon: Users, href: "/members" },
    { name: "Checkouts", icon: Calendar, href: "/checkouts" },
];

const adminNavItems2 = [
    { name: "Settings", icon: Gear, href: "/settings" },
    { name: "Help", icon: Question, href: "/help" },
];
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
                    <div className='space-y-3'>
                        <h1 className='text-4xl font-bold text-gray-800'>
                            My Library
                        </h1>
                        <p className='text-gray-600 text-lg'>
                            Admin Dashboard of My Library
                        </p>
                    </div>
                    <div className='space-y-3 flex-grow h-full'>
                        {adminNavItems.map((item, index) => (
                            <DrawerClose asChild key={index}>
                                <NavLink
                                    
                                    to={item.href}
                                    className={({ isActive }) => `flex items-center py-3 px-4 text-base font-medium  rounded-lg hover:bg-gray-100 hover:scale-95 transition duration-150 ease-in-out ${isActive ? "bg-gray-900 text-gray-100 hover:bg-gray-900" : ""
                                        }`}
                                >
                                    <item.icon className='mr-4 h-6 w-6' />
                                    {item.name}
                                </NavLink>
                            </DrawerClose>
                        ))}
                    </div>
                    <div className='border-t border-gray-200 pt-4'>
                        {adminNavItems2.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`flex items-center py-3 px-4 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:scale-95 transition duration-150 ease-in-out ${item.active &&
                                    "bg-gray-900 text-gray-100 hover:bg-gray-900 "
                                    }`}
                            >
                                <item.icon className='mr-4 h-6 w-6' />
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
};
