import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/LandingPage';
import Books from './Pages/Books';
import SecondaryPage from './Pages/SecondaryPage';
import NotFound from './Pages/NotFound';
import BookDetails from './Pages/BookDetails';
import AddBook from './Pages/Addbook';
import EditBook from './Pages/EditBook';



function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route index element={<Dashboard />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/books' element={<Books />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                    <Route path='/app' element={<SecondaryPage />} >
                        <Route path='/app/:bookId' element={<BookDetails />} />
                        <Route path='/app/addbook' element={<AddBook />} />
                        <Route path='/app/editbook/:bookId' element={<EditBook />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
