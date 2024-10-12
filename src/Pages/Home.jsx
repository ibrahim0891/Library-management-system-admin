import { Outlet, useOutletContext } from "react-router-dom";
import { Topbar } from "../components/Topbar";
import { Sidebar } from "phosphor-react";
import { SidebarTrigger } from "../components/Drawer";
import { SideBar } from "../components/Sidebar";
import { useEffect, useState } from "react";

const Home = () => {
    const [context , setContext ] = useState({})
    console.log(context);
    return (
        <div className='h-screen bg-gray-50 w-full flex  mx-auto border-2 border-gray-100'>

            <SideBar className='shadow-sm border-r-2 border-gray-100' />
            <div className="flex-1 flex flex-col overflow-x-auto ">
                <Topbar pageTitle={context.pageTitle}></Topbar>
                <Outlet context={{context, setContext }} />
            </div>

        </div>
    );
};

export default Home;
