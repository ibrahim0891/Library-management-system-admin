import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, Textarea } from "keep-react"
import { Barcode, BookmarkSimple, BookOpen, Buildings, CalendarBlank, Globe, Money, Package, Password, Pencil, PencilSimpleLine, PersonSimple, Plus, TextT, User } from "phosphor-react"
import { UploadComponent } from "./UploadComponent"
import { useState } from "react"
import axios from "axios"
import bookApiService from "../Services/bookApiService"




const FormField = ({ icon, label, id, value, type = "text", fieldName, placeholder, inputHandlerFuntion }) => (
    <div className="space-y-2">
        <Label htmlFor={id} className="flex items-center">
            {icon}
            {label}
        </Label>
        <input
            onChange={inputHandlerFuntion}
            id={id} value={value} name={fieldName} type={type} placeholder={placeholder} required className="w-full px-4 py-2 my-2 placeholder-gray-400 border rounded-md border-gray-200/70 focus:outline-none focus:ring-2 focus:ring-slate-300 ring-offset-3 focus:border-transparent "
        />
    </div>
)


const BookForm = ({ bookObject }) => {
    const [inputs, setInputs] = useState({
        language: bookObject?.language || "",
        isbn: bookObject?.isbn || "",
        publisher: bookObject?.publisher || "",
        price: bookObject?.price?.toString() || "",
        publishYear: bookObject?.publishYear?.toString() || "",
        bookName: bookObject?.bookName || "",
        authorName: bookObject?.authorName || "",
        description: bookObject?.description || "",
        pages: bookObject?.pages ? bookObject?.pages?.toString() : "",
        publisher: bookObject?.publisher || "",
        price: bookObject?.price ? bookObject?.price?.toString() : "",
        publishYear: bookObject?.publishYear ? bookObject?.publishYear?.toString() : "",
        bookName: bookObject?.bookName || "",
        authorName: bookObject?.authorName || "",
        description: bookObject?.description || "",
        category: bookObject?.category || "",
    })
    


    const handleInput = (e) => {
        e.preventDefault()
        const { id, value } = e.target
        setInputs((prevInputs) => ({
            ...prevInputs,
            [id]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (bookObject) {
            let response = await bookApiService.updateBook(bookObject._id, inputs)
            console.log(response.data);
            window.location.href = '/app/' + bookObject._id
        } else {
            let response = await bookApiService.createBook(inputs) 
            window.location.href = '/books'
            console.log(response);
        }
        console.log(bookObject); 
    }

    const formFields = [
        {
            icon: <Barcode size={18} className="mr-2" />,
            label: "ISBN",
            id: "isbn",
            placeholder: bookObject?.isbn || "Enter ISBN",
            value: inputs.isbn,
            type: "text",
            inputHandlerFuntion: handleInput
        },
        {
            icon: <Globe size={18} className="mr-2" />,
            label: "Language",
            id: "language",
            value: inputs.language,
            placeholder: bookObject?.language || "Enter language",
            inputHandlerFuntion: handleInput
        },
        {
            icon: <Package size={18} className="mr-2" />,
            label: "Page Count",
            id: "pages",
            placeholder: bookObject?.pages?.toString() || "Enter page count",
            value: inputs.pages,
            type: "number",
            inputHandlerFuntion: handleInput
        },
        {
            icon: <Buildings size={18} className="mr-2" />,
            label: "Publisher",
            id: "publisher",
            value: inputs.publisher,
            placeholder: bookObject?.publisher || "Enter publisher",
            inputHandlerFuntion: handleInput

        },
        {
            icon: <Money size={18} className="mr-2" />,
            label: "Price",
            id: "price",
            placeholder: bookObject?.price?.toString() || "Enter price",
            type: "number",
            value: inputs.price,
            inputHandlerFuntion: handleInput

        },
        {
            icon: <CalendarBlank size={18} className="mr-2" />,
            label: "Publish Year",
            id: "publishYear",
            placeholder: bookObject?.publishYear?.toString() || "Enter publish year",
            type: "number",
            inputHandlerFuntion: handleInput,
            value: inputs.publishYear,

        }]
    let topFormFields = [
        {
            icon: <TextT size={18} className="mr-2" />,
            label: "Book Name",
            id: "bookName",
            placeholder: bookObject?.bookName || "Enter book name",
            inputHandlerFuntion: handleInput,
            value: inputs.bookName,
        },
        {
            icon: <User size={18} className="mr-2" />,
            label: "Author Name",
            id: "authorName",
            placeholder: bookObject?.authorName || "Enter author name",
            inputHandlerFuntion: handleInput,
            value: inputs.authorName,
        },

    ]
    return (
        <div className="items-center justify-start p-4 md:flex ">
            <Card className="block min-w-full border-0 shadow-none lg:m-auto">
                <CardContent>
                    <CardHeader className="mb-2 space-y-2">
                        <CardTitle className="flex items-center ">
                            <BookOpen size={24} className="mr-2" />
                            {bookObject ? `Edit Books` : "Add New Book"}
                        </CardTitle>
                        <CardDescription>{bookObject ? `Update book information of ${bookObject?.bookName} ` : "Add a new book for users to read."} </CardDescription>
                    </CardHeader>
                    <form className="grid-cols-2 gap-8 mb-6 space-y-6 lg:grid" onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {topFormFields.map((field) => (
                                    <FormField key={field.id} {...field} />
                                ))}
                            </fieldset>
                            <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                {formFields.map((field) => (
                                    <FormField key={field.id} {...field} />
                                ))}
                            </fieldset>
                            <div className="space-y-2">
                                <Label htmlFor="description" className="flex items-center">
                                    <BookmarkSimple size={18} className="mr-2" /> Description
                                </Label>
                                <Textarea id="description" placeholder={bookObject?.description || "Write description..."} value={inputs.description} onChange={handleInput}></Textarea>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <Label htmlFor="category" className="flex items-center mb-2">
                                    <BookmarkSimple size={18} className="mr-2" />
                                    {bookObject ? "Update Category" : "Select Category"}
                                </Label>
                                <select
                                    id="category"
                                    className="w-full p-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-200"
                                    value={inputs.category}
                                    onChange={handleInput}

                                >
                                    <option value="">Select Category</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="non-fiction">Non-Fiction</option>
                                    <option value="mystery">Mystery</option>
                                    <option value="romance">Romance</option>
                                    <option value="science-fiction">Science Fiction</option>
                                    <option value="art">Art</option>
                                    <option value="history">History</option>
                                </select>
                            </div>
                            <Label htmlFor="image" className="flex items-center mb-2"> Upload new image</Label>
                            <UploadComponent />
                            <Button type="submit" className="flex items-center justify-center w-full bg-gray-700 hover:bg-slate-500">
                                {bookObject ? <PencilSimpleLine size={20} className="mr-3" /> : <Plus size={20} className="mr-3" />}
                                {bookObject ? "Edit Book" : "Add book"}                            </Button>

                        </div>
                    </form>
                    <CardFooter>
                        <div className="text-sm text-center text-gray-500">
                            <p>As an admin, you are adding a book to the library system.</p>
                            <p className="mt-2">Need assistance? <a href="/admin-support" className="text-blue-500 hover:underline">Contact the admin support team</a>.</p>
                        </div>
                    </CardFooter>
                </CardContent>
            </Card>
        </div>
    )
}


export default BookForm