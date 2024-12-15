import { useContext, useEffect } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import BookForm from "../components/BookForm"
import BookContext from "../Context/BookContext"



const EditBook = () => {
    const books = useContext(BookContext)
    const { bookId } = useParams()

    const book = books.find((book) => book.id == bookId); 

    let { context, setContext } = useOutletContext()
    useEffect(() => {
        setContext({ title: `Edit - ${book.bookName}`, dropdownMenuItems: { Cancel: "Add new book" } })
    }, [])
    return (
        <BookForm bookObject={book} ></BookForm>
    )
}

export default EditBook