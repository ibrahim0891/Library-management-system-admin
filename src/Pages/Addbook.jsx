import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import BookForm from "../components/BookForm"



const AddBook = () => {
    let { context, setContext } = useOutletContext()
    useEffect(() => {
        setContext({ title: "Add new book", dropdownMenuItems: { Cancel: '/books' } })
    }, [])
    return (
       <BookForm></BookForm>
    )
}

export default AddBook