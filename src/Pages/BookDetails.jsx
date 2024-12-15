import { useContext, useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import BookContext from "../Context/BookContext";
import { BookCard, BookCardInformation, BookThumbnail } from "../components/BookCard";
import { BookBookmark, HandPalm, Heart, PencilSimple, Trash, X } from "phosphor-react";
import BookInformationTable from "../components/BookInformationTable.jsx";
import Ratings from "../components/Ratings.jsx";
import Reviews from "../components/Reviews.jsx";



const BookDetails = () => {
    const { bookId } = useParams();
    const { context, setContext } = useOutletContext();
    const books = useContext(BookContext)
    const book = books.find((book) => book._id == bookId);
    useEffect(() => {
        setContext({
            title: `${book.bookName} - ${book.authorName}`, dropdownMenuItems: {
                "Dashboard": "/dashboard",
                "Books": "/books",
                "Edit Book": `/app/editbook/${bookId}`,
                "Book History": `/book-history/${bookId}`
            }
        })
    }, [])

    console.log(book);

    {/* Helper component for consistent info item styling */ }
    const InfoItem = ({ label, value }) => (
        <p className="text-gray-700">
            <span className="font-semibold">{label}:</span> {value}
        </p>
    )

    const [infoVisible, setInfoVisible] = useState(false);
    return (
        // <div className="p-4 ">
        //     {infoVisible && <div className="flex items-center justify-between p-2 pr-4 mb-4 -m-4 bg-amber-50 text-amber-700">
        //         <span> This book card will be replaced by a new full featured book card component later</span>
        //         <X onClick={() => setInfoVisible(false)}></X>
        //     </div>}
        //     <div className="p-4 mx-auto max-w-7xl">
        //         <div className="flex flex-col gap-8 lg:flex-row">
        //             <div className="lg:w-1/3">
        //                 <div className="sticky top-24">
        //                     <BookThumbnail book={book} customClassName='w-full max-w-xs mx-auto' />
        //                     <div className="flex gap-4 mt-6">
        //                         <Link to={`/app/editbook/${bookId}`} className="flex-1">
        //                             <button className="flex items-center justify-center w-full gap-2 px-4 py-2 font-semibold text-gray-800 transition duration-300 bg-gray-100 rounded-lg hover:bg-gray-200">
        //                                 <BookBookmark size={20} />
        //                                 Borrow
        //                             </button>
        //                         </Link>
        //                         <button className="flex items-center justify-center flex-1 gap-2 px-4 py-2 font-semibold text-gray-800 transition duration-300 bg-gray-100 rounded-lg hover:bg-gray-200">
        //                             <Heart size={20} />
        //                             Add to Wishlist
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="lg:w-2/3">
        //                 <section className="p-6 space-y-6 bg-white rounded-lg shadow-sm">
        //                     <h2 className="text-3xl font-bold text-gray-800">{book.bookName}</h2>
        //                     <p className="text-xl text-gray-600">{book.authorName}</p>
        //                     <div className="prose max-w-none">
        //                         <h3 className="text-xl font-semibold text-gray-700">Description</h3>
        //                         <p className="text-gray-600">{book.description}</p>
        //                     </div>
        //                     <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        //                         <div className="space-y-2">
        //                             <InfoItem label="Publisher" value={book.publisher} />
        //                             <InfoItem label="Pages" value={book.pages} />
        //                             <InfoItem label="ISBN" value={book.isbn} />
        //                             <InfoItem label="Publish Year" value={book.publishYear} />
        //                             <InfoItem label="Rating" value={`${book.rating}/5`} />
        //                             <InfoItem label="Category" value={book.category} />
        //                         </div>
        //                         <div className="space-y-2">
        //                             <InfoItem label="Price" value={`${book.price} ${book.currency}`} />
        //                             <InfoItem label="Language" value={book.language} />
        //                             <InfoItem label="Availability" value={book.isAvailable ? 'In Stock' : 'Out of Stock'} />
        //                             <InfoItem label="Copies in Stock" value={book.copiesInStock} />
        //                             <InfoItem label="Format" value={book.format} />
        //                             <InfoItem label="Created" value={new Date(book.createdAt).toLocaleDateString()} />
        //                             <InfoItem label="Updated" value={new Date(book.updatedAt).toLocaleDateString()} />
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <h3 className="mb-2 text-xl font-semibold text-gray-700">Tags</h3>
        //                         <div className="flex flex-wrap gap-2">
        //                             {book.tags.map((tag, index) => (
        //                                 <span key={index} className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full">{tag}</span>
        //                             ))}
        //                         </div>
        //                     </div>
        //                 </section>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className='w-full pb-0 bg-white border shadow-md '>
             <div className='m-8 mb-0 '>
                <div className='sticky flex items-center justify-start p-6 mb-6 -m-8 space-x-3 text-2xl font-bold bg-white border-b shadow-sm top-14'>
                    <h1> Book Details - id: {book.id} </h1>
                </div>
                <div className='flex flex-col lg:flex-row lg:gap-8'>
                    <div className='lg:w-1/4'>
                        <img
                            src={book.imageLink}
                            alt=''
                            className='block w-2/4 m-auto lg:w-full'
                        />
                        <div>
                            <h1 className='my-4 text-2xl font-bold text-center lg:text-left'>
                                {book.bookName}
                            </h1>
                        </div>
                    </div>
                    <div className=' lg:w-3/4'>
                        <div className='mt-4'>
                            <BookInformationTable bookData={book}></BookInformationTable>
                        </div>
                        <div>
                            {/* rating and review */}
                            <Ratings startCount={book.rating} />
                            <Reviews />
                        </div>
                    </div>
                </div>
            </div> 

        </div>    );
};


export default BookDetails;