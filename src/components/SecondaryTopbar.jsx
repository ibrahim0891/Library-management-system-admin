import { Dropdown, DropdownAction, DropdownContent } from "keep-react";
import { CaretLeft, DotsThree, DotsThreeVertical } from "phosphor-react"
import { Link } from "react-router-dom";




const TopbarDropdown = ({ dropdownMenu }) => {
    return (
        <button className="text-gray-600 transition-colors hover:text-gray-800 focus:outline-none">
            <Dropdown>
                <DropdownAction asChild>
                    <DotsThreeVertical size={24} className="rounded-md  hover:shadow-lg w-7 h-7" />
                </DropdownAction>
                <DropdownContent className="w-48 p-2 text-left border rounded-md" >
                    {dropdownMenu && Object.keys(dropdownMenu).map((key) => (
                        <Link to={dropdownMenu[key]} className="block px-4 py-2 rounded-md text-md text hover:bg-slate-100 " key={key}>
                            {key}
                        </Link>
                    ))}
                </DropdownContent>
            </Dropdown>
        </button>
    )
}


/**
 * Renders a secondary topbar component with a back button, page title, and a dropdown menu.
 *
 * @param {Object} props - The component props.
 * @param {string} props.pageTitle - The title to display in the topbar.
 * @param {Object} props.dropdownMenu - An object mapping dropdown menu item labels to their corresponding routes.
 * @returns {JSX.Element} The secondary topbar component.
 */
const SecondaryTopbar = ({ pageTitle, dropdownMenu }) => { 
    return (
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white shadow-md">
            <div onClick={() => window.history.back()} className="text-gray-600 transition-colors hover:text-gray-800">
                <CaretLeft className="w-5 cursor-pointer h-7" weight="bold" />
            </div>
            <div className="w-4/5 px-6 text-center">
                <h1 className="text-lg font-semibold text-gray-800 sm:truncate">{pageTitle || "Secondary page"}</h1>
            </div>
            <TopbarDropdown dropdownMenu={dropdownMenu} />
            <TopbarDropdown dropdownMenu={dropdownMenu} />
        </div>
    )
}

export default SecondaryTopbar;   