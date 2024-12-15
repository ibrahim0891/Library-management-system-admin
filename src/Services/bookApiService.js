import axios from "axios"




const bookApiService = {}

bookApiService.config = {
    apiBaseUrl: 'http://localhost:3000/library'
}
bookApiService.updateBook = async (bookId, dataToUpdate, cb) => {
    const response = await axios.put(bookApiService.config.apiBaseUrl + '/update/' + bookId, dataToUpdate)
    return response.data
}

bookApiService.createBook = async (dataToCreateWith, cb) => {
    const response = await axios.post(bookApiService.config.apiBaseUrl + '/create' , dataToCreateWith)
    return response.data
}

bookApiService.deleteBook = async (bookId) => {
    const response = await axios.delete(`${bookApiService.config.apiBaseUrl}/delete/${bookId}`)
    return response.data
}

bookApiService.fetchAllBooks = async () => {
    const response = await axios.get(bookApiService.config.apiBaseUrl + '/books/all')
    console.log(response.data);
    return response.data
}

bookApiService.fetchBook = async (bookId) => { 
    const response = await axios.get(bookApiService.config.apiBaseUrl + '/book/' + bookId)
    return response.data
}

export default bookApiService