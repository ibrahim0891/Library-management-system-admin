import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import BookContext from "../Context/BookContext";
import { BookCard, BookCardInformation, BookThumbnail } from "../components/BookCard";
import { PencilSimple, Trash, X } from "phosphor-react";
import { Modal, ModalAction, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalTitle } from "keep-react";
import axios from "axios";
import bookApiService from "../Services/bookApiService";



const BookDetails = () => {
    const { bookId } = useParams();
    const { context, setContext } = useOutletContext();
    const [book, setBook] = useState()

    
    useEffect(() => { 
        bookApiService.fetchBook(bookId).then(data => {
            setBook(data)
            setContext({
                title: `${data.bookName} - ${data.authorName}`, dropdownMenuItems: {
                    "Dashboard": "/dashboard",
                    "Books": "/books",
                    "Edit Book": `/app/editbook/${bookId}`,
                    "Book History": `/book-history/${bookId}`
                }
            })
        })
    }, [])

    
    let deleteBook = async (bookId) => {
        console.log(bookId);
        const response = await bookApiService.deleteBook(bookId)
        console.log(response.data);
        window.location.href = '/books'
    }
 
    const InfoItem = ({ label, value }) => (
        <p className="flex items-center justify-between pb-2 text-gray-700 border-b border-b-slate-200 ">
            <span className="font-semibold">{label}:</span> <span className=" text-end">{value} </span>
        </p>
    )

    const [infoVisible, setInfoVisible] = useState(false);
    return (
        <div className="p-4 ">
            {infoVisible && <div className="flex items-center justify-between p-2 pr-4 mb-4 -m-4 bg-amber-50 text-amber-700">
                <span> This book card will be replaced by a new full featured book card component later</span>
                <X onClick={() => setInfoVisible(false)}></X>
            </div>}
            {
                book ? <div className="p-4 mx-auto max-w-7xl">
                    <div className="flex flex-col gap-8 lg:flex-row">
                        <div className="lg:w-1/3">
                            <div className="sticky top-24">
                                <BookThumbnail book={book} customClassName='w-full max-w-xs mx-auto' />
                                <div className="flex gap-4 mt-6">
                                    <Link to={`/app/editbook/${bookId}`} className="flex-1">
                                        <button className="flex items-center justify-center w-full gap-2 px-4 py-2 font-semibold text-gray-800 transition duration-300 bg-gray-100 rounded-lg hover:bg-gray-200">
                                            <PencilSimple size={20} />
                                            Edit
                                        </button>
                                    </Link>
                                    <Modal>
                                        <ModalAction asChild>
                                            <button className="flex items-center justify-center flex-grow px-4 py-2 font-semibold text-gray-800 transition duration-200 ease-in-out bg-gray-100 rounded hover:bg-gray-300">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                Deleten
                                            </button>
                                        </ModalAction>
                                        <ModalContent className="space-y-4">
                                            <ModalTitle>Are you sure?</ModalTitle>
                                            <ModalDescription>
                                                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                                            </ModalDescription>
                                            <ModalFooter className="flex justify-center space-x-2 md:justify-end">
                                                <ModalClose asChild>
                                                    <button className="w-1/2 px-4 py-2 font-medium text-red-800 transition duration-200 ease-in-out bg-red-100 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50">No</button>
                                                </ModalClose>
                                                <button className="w-1/2 px-4 py-2 font-medium text-gray-800 transition duration-200 ease-in-out bg-gray-100 border rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                                                    onClick={() => deleteBook(bookId)}>
                                                    Yes
                                                </button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <section className="p-8 space-y-6 bg-white border rounded-lg shadow-sm">
                                <h2 className="text-3xl font-bold text-gray-800">{book.bookName}</h2>
                                <p className="text-xl text-gray-600">{book.authorName}</p>
                                <div className="prose max-w-none">
                                    <h3 className="text-xl font-semibold text-gray-700">Description</h3>
                                    <p className="text-justify text-gray-600 text-pretty ">{book.description}</p>
                                </div>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <InfoItem label="Publisher" value={book.publisher} />
                                        <InfoItem label="Pages" value={book.pages} />
                                        <InfoItem label="ISBN" value={book.isbn} />
                                        <InfoItem label="Publish Year" value={book.publishYear} />
                                        <InfoItem label="Rating" value={`${book.rating}/5`} />
                                        <InfoItem label="Category" value={book.category} />
                                        <InfoItem label="Total Copies" value={book.copies.length} />
                                    </div>
                                    <div className="space-y-2">
                                        <InfoItem label="Price" value={`${book.price} ${book.currency}`} />
                                        <InfoItem label="Language" value={book.language} />
                                        <InfoItem label="Availability" value={book.isAvailable ? 'In Stock' : 'Out of Stock'} />
                                        <InfoItem label="Copies in Stock" value={book.copiesInStock} />
                                        <InfoItem label="Format" value={book.format} />
                                        <InfoItem label="Created" value={new Date(book.createdAt).toLocaleDateString()} />
                                        <InfoItem label="Updated" value={new Date(book.updatedAt).toLocaleDateString()} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-gray-700">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {book.tags != undefined ? book.tags.map((tag, index) => (
                                            <span key={index} className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full">{tag}</span>
                                        )) : null}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div> 
                        : <h1 className="text-4xl font-bold text-center text-gray-800">Loading...</h1>
            }
            

        </div>
    );
};


export default BookDetails;