import {
    Bell,
    BookmarkSimple,
    List,
    MagnifyingGlass,
    User,
    UserSquare,
} from "phosphor-react";
import { SidebarTrigger } from "./Drawer";

export const Topbar = ({ pageTitle }) => {
    return (
        <div className='flex items-center justify-between bg-white p-3 md:p-4 sticky top-0 z-10 shadow'>
            <SidebarTrigger />
            { pageTitle  ? <h1 className="text-xl font-bold md:font-thin text-center md:text-left">{pageTitle} </h1>: <div className='flex-grow mx-4'>
                <div className='rounded-lg bg-gray-100 p-2 flex items-center gap-3 '>
                    <MagnifyingGlass size={24} />
                    <input
                        type='search'
                        className='bg-transparent outline-none w-full'
                        placeholder='Search Library...'
                    />
                </div>
            </div>}

            <div className='flex gap-4 items-center'>
                <Bell size={24} />
                <div className='bg-metal-100 p-2 rounded-md'>
                    <User size={24} />
                </div>
            </div>
        </div>
    );
};
