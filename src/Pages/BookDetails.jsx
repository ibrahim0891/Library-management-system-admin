import { useContext, useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import BookContext from "../Context/BookContext";
import { BookCard } from "../components/BookCard";
import { X } from "phosphor-react";



const BookDetails = () => {
    const { bookId } = useParams();
    const { context, setContext } = useOutletContext();
    const books = useContext(BookContext)
    const book = books.find((book) => book.id == bookId);
    useEffect(() => {
        setContext({
            title: `${book.bookName}`, dropdownMenuItems: {
                "Dashboard": "/dashboard",
                "Books": "/books",
                "Edit Book": `/edit-book/${bookId}`,
                "Book History": `/book-history/${bookId}`,
                "BookID": bookId,
            }
        })
    }, [])

    console.log(book);

    const [infoVisible, setInfoVisible] = useState(true);
    return (
        <div className="p-4 ">
            {infoVisible && <div className="-m-4 mb-4 p-2 pr-4 bg-amber-50 text-amber-700 flex justify-between items-center">
                <span> This book card will be replaced by a new full featured book card component later</span>
                <X onClick={()=> setInfoVisible(false)}></X>
            </div>}
            <BookCard book={book}></BookCard>
        </div>
    );
};


export default BookDetails;