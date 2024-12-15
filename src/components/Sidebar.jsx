 
import { Books, House, List, Question } from "phosphor-react";

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


export const SidebarHeader = () => {
    return (
        <div className='space-y-3'>
            <h1 className='text-4xl font-bold text-gray-800'>
                My Library
            </h1>
            <p className='text-lg text-gray-600'>
                Admin Dashboard of My Library
            </p>
        </div>
    )
}

export const SidebarPrimaryNavLinks = () => {
    return (<div className='flex-grow h-full space-y-3'>
        {adminNavItems.map((item, index) => (
            <NavLink
                key={index}
                to={item.href}
                className={({ isActive }) => `flex items-center py-3 px-4 text-base font-medium  rounded-lg hover:bg-gray-100 hover:scale-95 transition duration-150 ease-in-out ${isActive ? "bg-gray-900 text-gray-100 hover:bg-gray-900" : ""
                    }`}
            >
                <item.icon className='w-6 h-6 mr-4' />
                {item.name}
            </NavLink>
        ))}
    </div>)
}

export const SidebarSecondaryNavLinks = () => {
    return (
        <div className='pt-4 border-t border-gray-200'>
            {adminNavItems2.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center py-3 px-4 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:scale-95 transition duration-150 ease-in-out ${item.active &&
                        "bg-gray-900 text-gray-100 hover:bg-gray-900 "
                        }`}
                >
                    <item.icon className='w-6 h-6 mr-4' />
                    {item.name}
                </a>
            ))}
        </div>
    )
}

export const SideBar = () => {
    return (
        <div className='sticky top-0 z-10 flex-col hidden h-full p-6 px-8 space-y-10 overflow-x-auto bg-white border-b border-r-2 border-gray-100 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 sm:flex'>
            <SidebarHeader />
            <SidebarPrimaryNavLinks />
            <SidebarSecondaryNavLinks />
        </div>
    );
};
