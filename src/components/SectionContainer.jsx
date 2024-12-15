import Header from "./Header";



const SectionContainer = ({ children, title}) => {
    return (

        <div className='p-4 bg-white h-full w-full overflow-x-auto'> 
            {children}
        </div>
    );
};

export default SectionContainer;