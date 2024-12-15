 
import { BookmarkSimple, BookOpen, Books, House, Question, Star } from "phosphor-react";

import { Book, Users, Calendar, Gear } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
const adminNavItems = [
    { name: "Home", icon: House, href: "/dashboard", active: true },
    { name: "Catagory", icon: Books, href: "/books" },
    { name: "My Library", icon: BookOpen, href: "/members" },
    { name: "Faviorite", icon: Star, href: "/checkouts" },
    { name: "Reading List", icon: BookmarkSimple, href: "/checkouts" },
];

const adminNavItems2 = [
    { name: "Settings", icon: Gear, href: "/settings" },
    { name: "Help", icon: Question, href: "/help" },
];


export const SidebarHeader = () => {
    return (
        <div className='space-y-3'>
            <h1 className='text-4xl font-bold text-gray-800'>
                My Library
            </h1>
            <p className='text-gray-600 text-lg'>
                Have a nice day on My Library
            </p>
        </div>
    )
}

export const SidebarPrimaryNavLinks = () => {
    return (<div className='space-y-3 flex-grow h-full'>
        {adminNavItems.map((item, index) => (
            <NavLink
                key={index}
                to={item.href}
                className={({ isActive }) => `flex items-center py-3 px-4 text-base font-medium  rounded-lg hover:bg-gray-100 hover:scale-95 transition duration-150 ease-in-out ${isActive ? "bg-gray-900 text-gray-100 hover:bg-gray-900" : ""
                    }`}
            >
                <item.icon className='mr-4 h-6 w-6' />
                {item.name}
            </NavLink>
        ))}
    </div>)
}

export const SidebarSecondaryNavLinks = () => {
    return (
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
    )
}

export const SideBar = () => {
    return (
        <div className='p-6 px-8 space-y-10 flex-col h-full border-b overflow-x-auto sticky top-0 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white border-r-2 z-10 border-gray-100  hidden sm:flex'>
            <SidebarHeader />
            <SidebarPrimaryNavLinks />
            <SidebarSecondaryNavLinks />
        </div>
    );
};
