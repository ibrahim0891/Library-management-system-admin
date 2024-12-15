import { BookOpen, Books, Users, X } from "phosphor-react";
import Header from "../components/Header";
import SectionContainer from "../components/SectionContainer";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import BookContext from "../Context/BookContext";
import { BookCard } from "../components/BookCard";


const DashBoardContent = () => {
    const books = useContext(BookContext); 
    const [bookID, setBookID] = useState(1); 

    let { context, setContext } = useOutletContext()
    useEffect(() => {
        setContext({ pageTitle: null })
    }, [])

    const [infoVisible, setInfoVisible] = useState(false)
    
    return (
        <div className="p-4 bg-white h-full w-full overflow-x-auto">
            {infoVisible && <div className="-m-4 mb-4 p-2 pr-4 bg-amber-50 text-amber-700 flex justify-between items-center">
                <span> ভবিষ্যতে আমাদের ড্যাশবোর্ডে অনেক গুলো সেকশন থাকবে । </span>
                <X onClick={() => setInfoVisible(false)}></X>
            </div>} 
                <div className=' flex-1  p-4'>
                    <Header
                        title={"Todays featured books "} 

                    />

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
                        {books.map((book, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setBookID(book._id);
                                    setActive(index);
                                }} 
                            >
                                <BookCard book={book} />
                            </div>
                        ))}
                    </div> 
            </div>

        </div>
    )
}
const Dashboard = () => {

    return (
        <>
            <DashBoardContent/>
        </>
    );


}

export default Dashboard;