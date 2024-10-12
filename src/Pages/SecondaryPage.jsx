import { Outlet } from "react-router-dom";
import SecondaryTopbar from "../components/SecondaryTopbar";
import { useState } from "react";
import { SideBar } from "../components/Sidebar";



/**
 * Renders the SecondaryPage component, which includes a SecondaryTopbar and an Outlet.
 * The SecondaryTopbar is rendered with a pageTitle and dropdownMenuItems from the context state.
 * The Outlet is rendered with the context and setContext values passed through the context prop.
 */
const SecondaryPage = () => {
    const [context, setContext] = useState({})
    return (
        <div className="flex w-full h-screen   mx-auto border-2 border-gray-200">
            <SideBar></SideBar>
            <div className="flex-1 overflow-y-auto">
                <SecondaryTopbar pageTitle={context.title} dropdownMenu={context.dropdownMenuItems}></SecondaryTopbar>
                <Outlet context={{ context, setContext }} />
            </div>
        </div>
    )
}

export default SecondaryPage;