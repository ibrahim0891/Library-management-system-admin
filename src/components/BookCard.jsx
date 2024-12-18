import { Modal, ModalAction, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalTitle } from "keep-react"
import { Link } from "react-router-dom";




export const BookThumbnail = ({ book  , customClassName}) => {
    return (
        <>
            <div className={`relative aspect-[2/3] w-24 ${customClassName}`}>
                <img className="h-full rounded-sm shadow-md" src={book.imageLink} alt={book.bookName} />
                <div className="absolute px-3 py-1 text-xs font-bold bg-yellow-400 rounded-full shadow-sm bottom-2 right-2">
                    ★ {book.rating}/5
                </div>
            </div>
        </>
    )
}

export const BookCardInformation = ({ book }) => {
    return (
        <div className=" 1/2">
            <h2 className="mb-2 text-2xl font-bold leading-tight text-gray-800 transition-colors duration-200 hover:text-blue-600">{book.bookName}</h2>
            <p className="mb-3 font-serif text-base italic text-gray-700">By {book.authorName}</p>
            <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path><path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path></svg>
                    Published: {book.publishYear}
                </p>
                <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1.581.814L12 14.814l-2.419 1.419A1 1 0 018 15V4zM10 7a1 1 0 100 2h4a1 1 0 100-2h-4z" clipRule="evenodd"></path></svg>
                    Publisher: {book.publisher}
                </p>
                <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
                    Pages: {book.pages}
                </p>
            </div>
        </div>
    )
}

const BookCard = ({ book }) => {
    return (
        <div key={book.id} className="w-full px-4 py-6 overflow-hidden transition-all duration-300 bg-white border rounded-lg hover:shadow-lg">
            <Link to={`/app/${book._id}`} className="flex-grow">
                <div className="flex flex-col h-full">
                    <div className="flex items-start space-x-4 ">
                        <BookThumbnail book={book} className='w-24' />
                        <BookCardInformation book={book} />
                    </div>
                    <div className="flex justify-between hidden mt-auto space-x-4">
                        <button className="flex items-center justify-center w-1/2 px-4 py-2 font-semibold text-gray-800 transition duration-200 ease-in-out bg-gray-100 rounded hover:bg-gray-300">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            Edit
                        </button>

                        
                    </div>
                </div>
            </Link>
        </div>
    )
}
/**
 * Renders a card component for displaying book information.
 * 
 * @param {Array} book - The book Array containing the books details. 
 * @returns {JSX.Element} - The rendered book card component.
 */
const BookCards = ({ books }) => {
    return (
        <div className="grid w-full gap-4 p-4 px-0 rounded lg:grid-cols-2">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))
            }
        </div >
    )
}



export { BookCard, BookCards };
