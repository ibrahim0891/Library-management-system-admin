import { Dropdown, DropdownAction, DropdownContent } from "keep-react";
import { CaretLeft, DotsThree, DotsThreeVertical } from "phosphor-react"
import { Link } from "react-router-dom";


/**
 * Renders a secondary topbar component with a back button, page title, and a dropdown menu.
 *
 * @param {Object} props - The component props.
 * @param {string} props.pageTitle - The title to display in the topbar.
 * @param {Object} props.dropdownMenu - An object mapping dropdown menu item labels to their corresponding routes.
 * @returns {JSX.Element} The secondary topbar component.
 */
const SecondaryTopbar = ({ pageTitle, dropdownMenu }) => { 

    console.log(dropdownMenu);
    return (
        <div className="flex items-center justify-between bg-white p-4 sticky top-0 z-10 shadow-md">
            <div onClick={() => window.history.back()} className="text-gray-600 hover:text-gray-800 transition-colors">
                <CaretLeft className="h-7 w-5 cursor-pointer" weight="bold" />
            </div>
            <div className="">
                <h1 className="text-lg font-semibold text-gray-800">{pageTitle || "Secondary page"}</h1>
            </div>
            <button className="text-gray-600 hover:text-gray-800 transition-colors focus:outline-none">
                <Dropdown>
                    <DropdownAction asChild>
                        <DotsThreeVertical size={24} className=" hover:shadow-lg w-7 h-7 rounded-md" />
                    </DropdownAction>
                    <DropdownContent className="border text-left p-2 w-48 rounded-md" >
                        {dropdownMenu && Object.keys(dropdownMenu).map((key) => (
                            <Link to={dropdownMenu[key]} className="block px-4 py-2 text-md text hover:bg-slate-100 rounded-md " key={key}>
                                {key}
                            </Link>
                        ))}
                    </DropdownContent>
                </Dropdown>
            </button>
        </div>
    )
}

export default SecondaryTopbar;   