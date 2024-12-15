import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BookContext from './Context/BookContext.jsx'
import axios from 'axios'
import { Spinner } from 'keep-react'
import bookApiService from './Services/bookApiService.js'

function Root() {
    const [books, setBooks] = useState(false)
    const fetchBooks = async () => {
        const response = await bookApiService.fetchAllBooks() 
        setBooks(response)
    }
    fetchBooks()

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <StrictMode>
            {
                books ? <BookContext.Provider value={books}>
                    <App />
                </BookContext.Provider> : <div className='w-full h-screen flex items-center justify-center'> <Spinner className='animate-spin' /></div>
            }
        </StrictMode> 
    )
}

createRoot(document.getElementById('root')).render(<Root />)
