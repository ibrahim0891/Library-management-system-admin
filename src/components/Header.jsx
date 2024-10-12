import { Bell, MagnifyingGlass, User } from "phosphor-react";



const Header = ({title}) => {
    return (
        <h1 className="text-3xl font-bold mb-4">
            {title}
        </h1>
    );
};

export default Header;  