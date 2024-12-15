import { Button, Modal, ModalAction, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalTitle } from "keep-react"
import SectionContainer from "../components/SectionContainer"
import { MagnifyingGlass, Plus } from "phosphor-react"
import { Link, useOutletContext } from "react-router-dom";
import { useContext, useEffect } from "react";
import BookContext from "../Context/BookContext";
import { BookCards, BookCard } from "../components/BookCard";
import BookCatagories from "../components/BookCatagories";





/**
 * Renders the ManageBooks component, which provides a user interface for managing books.
 * It includes a search input, filters for author and publisher, and a BookCard component
 * to display the book information.
 * Filter management is not implemented yet.
 */
const ManageBooks = () => {
    const books = useContext(BookContext)

    return (
        <div className="w-full p-4 bg-white">
            <div className="flex flex-col justify-between items-center  rounded-lg gap-3  ">
                <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center w-full">
                    <div className="flex items-center w-full flex-grow gap-2 p-2 border rounded-md">
                        <input type="search" placeholder="Search" className="w-full px-4 py-2 rounded-md  border-gray-300 focus:outline-none" />
                        <button className="bg-gray-500 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out"> Search </button>
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 gap-4">
                    <select className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                        <option value="">Select Author</option>
                        <option value="author1">Author 1</option>
                        <option value="author2">Author 2</option>
                        <option value="author3">Author 3</option>
                    </select>
                    <select className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                        <option value="">Select Genre</option>
                        <option value="genre1">Fiction</option>
                        <option value="genre2">Non-Fiction</option>
                        <option value="genre3">Mystery</option>
                    </select>
                    <select className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
                        <option value="">Select Publisher</option>
                        <option value="publisher1">Publisher 1</option>
                        <option value="publisher2">Publisher 2</option>
                        <option value="publisher3">Publisher 3</option>
                    </select>
                </div>

            </div>
            <div>
                <BookCatagories></BookCatagories>
            </div>
            {/* <BookCards books={books} /> */}
        </div>

    )
}


/**
 * Renders the ManageBooks component, which provides a user interface for managing books.
 * It includes a search input, filters for author and publisher, and a BookCard component
 * to display the book information.
 * Filter management is not implemented yet.
 */
const Books = () => {
    let { context, setContext } = useOutletContext()
    useEffect(() => {
        setContext({ pageTitle: "Browse Books" })
    }, [])
    return (
        <ManageBooks></ManageBooks>
    )
}

export default Books; 