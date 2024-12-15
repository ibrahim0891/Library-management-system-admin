import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BookContext, { CatagoryContext } from './Context/BookContext.jsx'
import axios from 'axios'

let books = [
    {
        id: 1,
        imageLink: 'https://static-cse.canva.com/blob/142565/Blue-Orange-and-Yellow-Cool-Memoir_Inspirational-Book-Cover.jpg',
        bookName: 'Futurama',
        authorName: 'Michel Macarthy',
        publisher: 'Openbooks.org',
        pages: 320,
        isbn: '978-1234567890',
        publishYear: 2022,
        rating: 4,
        category: 'art',
        price: 200,
        currency: 'Taka',
        description: 'A description of Futurama. This captivating novel takes readers on a journey through time and space, exploring the possibilities of future civilizations. With its blend of humor and thought-provoking scenarios, Futurama challenges our perceptions of technology and human nature.',
        language: 'English',
        isAvailable: true,
        copiesInStock: 10,
        format: 'Hardcover',
        createdAt: '2024-10-14T16:00:17.357Z',
        updatedAt: '2024-10-14T16:00:17.357Z',
        tags: ['General', 'Book']
    },
    {
        id: 2,
        imageLink: 'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg',
        bookName: 'The Lost City',
        authorName: 'Emily Johnson',
        publisher: 'Mystery Press',
        pages: 280,
        isbn: '978-2345678901',
        publishYear: 2021,
        rating: 3,
        category: 'history',
        price: 200,
        currency: 'Taka',
        description: 'A description of The Lost City. This gripping historical mystery follows an archaeologist\'s quest to uncover an ancient civilization hidden deep in the jungle. As secrets are revealed and dangers mount, readers will be drawn into a world of adventure and intrigue.',
        language: 'English',
        isAvailable: true,
        copiesInStock: 10,
        format: 'Hardcover',
        createdAt: '2024-10-14T16:00:17.357Z',
        updatedAt: '2024-10-14T16:00:17.357Z',
        tags: ['General', 'Book']
    },
    {
        id: 3,
        imageLink: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/enceladus.jpg?auto=format&q=60&fit=max&w=930',
        bookName: 'Echoes of Eternity',
        authorName: 'Michael Chen',
        publisher: 'Sci-Fi Publications',
        pages: 400,
        isbn: '978-3456789012',
        publishYear: 2023,
        rating: 5,
        category: 'art',
        price: 200,
        currency: 'Taka',
        description: 'A description of Echoes of Eternity. This epic science fiction saga explores the far reaches of the universe, where humanity faces its greatest challenge yet. With stunning world-building and complex characters, Echoes of Eternity delves into themes of identity, consciousness, and the nature of existence itself.',
        language: 'English',
        isAvailable: true,
        copiesInStock: 10,
        format: 'Hardcover',
        createdAt: '2024-10-14T16:00:17.357Z',
        updatedAt: '2024-10-14T16:00:17.357Z',
        tags: ['General', 'Book']
    },
    {
        id: 4,
        imageLink: 'https://th.bing.com/th/id/OIP.nZBy3sCgeKohyHazuFccWgHaL2?rs=1&pid=ImgDetMain',
        bookName: 'Whispers in the Dark',
        authorName: 'Sarah Thompson',
        publisher: 'Thriller House',
        pages: 350,
        isbn: '978-4567890123',
        publishYear: 2020,
        rating: 4,
        category: 'art',
        price: 200,
        currency: 'Taka',
        description: 'A description of Whispers in the Dark. This chilling psychological thriller follows a detective\'s descent into madness as she hunts a serial killer who seems to defy the laws of nature. With its atmospheric prose and shocking twists, Whispers in the Dark will keep readers on the edge of their seats until the very last page.',
        language: 'English',
        isAvailable: true,
        copiesInStock: 10,
        format: 'Hardcover',
        createdAt: '2024-10-14T16:00:17.357Z',
        updatedAt: '2024-10-14T16:00:17.357Z',
        tags: ['General', 'Book']
    },
    {
        id: 5,
        imageLink: 'https://images.playground.com/37965031-c15b-4c0d-b0e3-f4cc80856cef.jpeg',
        bookName: 'The Quantum Paradox',
        authorName: 'David Rodriguez',
        publisher: 'Science Books Inc.',
        pages: 420,
        isbn: '978-5678901234',
        publishYear: 2022,
        rating: 5,
        category: 'history',
        price: 200,
        currency: 'Taka',
        description: 'A description of The Quantum Paradox. This groundbreaking work explores the cutting edge of quantum physics, unraveling the mysteries of the universe at its most fundamental level. Rodriguez masterfully explains complex concepts, making them accessible to both scientists and laypeople alike, while challenging our understanding of reality.',
        language: 'English',
        isAvailable: true,
        copiesInStock: 10,
        format: 'Hardcover',
        createdAt: '2024-10-14T16:00:17.357Z',
        updatedAt: '2024-10-14T16:00:17.357Z',
        tags: ['General', 'Book']
    },
    {
        id: 6,
        imageLink: 'https://th.bing.com/th/id/OIF.NG8deQVNMqVAZCSnt2esqw?rs=1&pid=ImgDetMain',
        bookName: 'Beneath the Willow',
        authorName: 'Laura Nakamura',
        publisher: 'Green Leaf Press',
        pages: 300,
        isbn: '978-6789012345',
        publishYear: 2021,
        rating: 3,
        category: 'art',
        price: 200,
        currency: 'Taka',
        description: 'A description of Beneath the Willow. This poignant coming-of-age story follows a young girl\'s journey of self-discovery in rural Japan. Nakamura\'s lyrical prose paints a vivid picture of tradition and change, exploring themes of family, identity, and the enduring power of nature to heal and transform.',
        language: 'English',
        isAvailable: true,
        copiesInStock: 10,
        format: 'Hardcover',
        createdAt: '2024-10-14T16:00:17.357Z',
        updatedAt: '2024-10-14T16:00:17.357Z',
        tags: ['General', 'Book']
    },
    {
        id: 7,
        imageLink: 'https://th.bing.com/th/id/OIP.nZBy3sCgeKohyHazuFccWgHaL2?rs=1&pid=ImgDetMain',
        bookName: 'Whispers in the Dark',
        authorName: 'Sarah Thompson',
        publisher: 'Thriller House',
        pages: 350,
        isbn: '978-4567890123',
        publishYear: 2020,
        rating: 4,
        category: 'history',
        price: 200,
        currency: 'Taka',
        description: 'A description of Whispers in the Dark. This chilling psychological thriller follows a detective\'s descent into madness as she hunts a serial killer who seems to defy the laws of nature. With its atmospheric prose and shocking twists, Whispers in the Dark will keep readers on the edge of their seats until the very last page.',
        language: 'English',
        isAvailable: true,
        copiesInStock: 10,
        format: 'Hardcover',
        createdAt: '2024-10-14T16:00:17.357Z',
        updatedAt: '2024-10-14T16:00:17.357Z',
        tags: ['General', 'Book']
    },
    {
        id: 8,
        imageLink: 'https://images.playground.com/37965031-c15b-4c0d-b0e3-f4cc80856cef.jpeg',
        bookName: 'The Quantum Paradox',
        authorName: 'David Rodriguez',
        publisher: 'Science Books Inc.',
        pages: 420,
        isbn: '978-5678901234',
        publishYear: 2022,
        rating: 5,
        category: 'art',
        price: 200,
        currency: 'Taka',
        description: 'A description of The Quantum Paradox. This groundbreaking work explores the cutting edge of quantum physics, unraveling the mysteries of the universe at its most fundamental level. Rodriguez masterfully explains complex concepts, making them accessible to both scientists and laypeople alike, while challenging our understanding of reality.',
        language: 'English',
        isAvailable: true,
        copiesInStock: 10,
        format: 'Hardcover',
        createdAt: '2024-10-14T16:00:17.357Z',
        updatedAt: '2024-10-14T16:00:17.357Z',
        tags: ['General', 'Book']
    },
    {
        id: 9,
        imageLink: 'https://th.bing.com/th/id/OIF.NG8deQVNMqVAZCSnt2esqw?rs=1&pid=ImgDetMain',
        bookName: 'Beneath the Willow',
        authorName: 'Laura Nakamura',
        publisher: 'Green Leaf Press',
        pages: 300,
        isbn: '978-6789012345',
        publishYear: 2021,
        rating: 3,
        category: 'history',
        price: 200,
        currency: 'Taka',
        description: 'A description of Beneath the Willow. This poignant coming-of-age story follows a young girl\'s journey of self-discovery in rural Japan. Nakamura\'s lyrical prose paints a vivid picture of tradition and change, exploring themes of family, identity, and the enduring power of nature to heal and transform.',
        language: 'English',
        isAvailable: true,
        copiesInStock: 10,
        format: 'Hardcover',
        createdAt: '2024-10-14T16:00:17.357Z',
        updatedAt: '2024-10-14T16:00:17.357Z',
        tags: ['General', 'Book']
    }
]

const booksForArts = books
    .filter((book) => book.category === "art")
    .map((book, index) => ({
        id: index + 1,
        bookName: book.bookName,
        authorName: book.authorName,
        publishYear: book.publishYear,
        imageLink: book.imageLink,
        rating: book.rating,
    }));

const booksForHistory = books
    .filter((book) => book.category === "history")
    .map((book, index) => ({
        id: index + 1,
        bookName: book.bookName,
        authorName: book.authorName,
        publishYear: book.publishYear,
        imageLink: book.imageLink,
        rating: book.rating,
    }));

const BookCatagoryMapping = {
    arts: booksForArts,
    history: booksForHistory,
    // Add more categories and books as needed
};
const catagories = [
    { id: 1, name: "Arts", icon: "🎨", totalBooks: booksForArts.length },
    { id: 2, name: "History", icon: "🏛️", totalBooks: booksForHistory.length },
    { id: 3, name: "Fiction", icon: "📚", totalBooks: 0 },
    { id: 4, name: "Science", icon: "🔬", totalBooks: 0 },
    { id: 5, name: "Children", icon: "👶", totalBooks: 0 },
    { id: 6, name: "Biography", icon: "👤", totalBooks: 0 },
    { id: 7, name: "Philosophy", icon: "🤔", totalBooks: 0 },
    { id: 8, name: "Poetry", icon: "📜", totalBooks: 0 },
    { id: 9, name: "Education", icon: "🎓", totalBooks: 0 },
    { id: 10, name: "Religion", icon: "🙏", totalBooks: 0 },
];


const Root = () => {
    const [serverBooks, setServerBooks] = useState()
    useEffect(() => {
        axios.get('http://localhost:3000/library/books/all').then((res) => {
            setServerBooks(res.data)
        })
    }, [])
    return <StrictMode>
        {serverBooks ?
            <BookContext.Provider value={serverBooks}>
                <CatagoryContext.Provider value={{ catagories, BookCatagoryMapping }}>
                    <App />
                </CatagoryContext.Provider>
            </BookContext.Provider> :
            "Loading..."}

    </StrictMode>
}

createRoot(document.getElementById('root')).render(
    <Root />
)
