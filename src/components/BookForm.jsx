import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, Textarea } from "keep-react"
import { Barcode, BookmarkSimple, BookOpen, Buildings, CalendarBlank, Globe, Money, Package, Password, Plus, TextT, User } from "phosphor-react"
import { UploadComponent } from "./UploadComponent"




const FormField = ({ icon, label, id, value, type = "text"  , placeholder} ) => (
    <div className="space-y-2">
        <Label htmlFor={id} className="flex items-center">
            {icon}
            {label}
        </Label>
        <input  id={id} value={value} type={type} placeholder={placeholder} className="placeholder-gray-400 px-4 py-2 border w-full border-gray-200/70 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 ring-offset-3 focus:border-transparent my-2 " />
    </div>
)


const BookForm = ({ bookObject }) => {
    console.log(bookObject);
    const formFields = [
        {
            icon: <Barcode size={18} className="mr-2" />,
            label: "ISBN",
            id: "isbn",
            placeholder: bookObject?.isbn || "Enter ISBN",
            type: "text",
        },
        {
            icon: <Globe size={18} className="mr-2" />,
            label: "Language",
            id: "language",
            placeholder: bookObject?.language || "Enter language",
        },
        {
            icon: <Package size={18} className="mr-2" />,
            label: "Page Count",
            id: "pages",
            placeholder: bookObject?.pages?.toString() || "Enter page count",
            type: "number",
        },
        {
            icon: <Buildings size={18} className="mr-2" />,
            label: "Publisher",
            id: "publisher",
            placeholder: bookObject?.publisher || "Enter publisher",
        },
        {
            icon: <Money size={18} className="mr-2" />,
            label: "Price",
            id: "price",
            placeholder: bookObject?.price?.toString() || "Enter price",
            type: "number",
        },
        {
            icon: <CalendarBlank size={18} className="mr-2" />,
            label: "Publish Year",
            id: "publishYear",
            placeholder: bookObject?.publishYear?.toString() || "Enter publish year",
            type: "number",
        }]
    let topFormFields = [
        {
            icon: <TextT size={18} className="mr-2" />,
            label: "Book Name",
            id: "bookName",
            placeholder: bookObject?.bookName || "Enter book name",
        },
        {
            icon: <User size={18} className="mr-2" />,
            label: "Author Name",
            id: "authorName",
            placeholder: bookObject?.authorName || "Enter author name",
        },

    ]
        return (
        <div className="p-4 md:flex items-center justify-start ">
            <Card className="block min-w-full lg:m-auto border-0 shadow-none">
                <CardContent>
                    <CardHeader className="space-y-2 mb-2">
                        <CardTitle className="flex items-center ">
                            <BookOpen size={24} className="mr-2" />
                            {bookObject ? `Edit Book ` : "Add New Book"}
                        </CardTitle>
                        <CardDescription>{bookObject ? `Update book information of ${bookObject?.bookName} ` : "Add a new book for users to read."} </CardDescription>
                    </CardHeader>
                    <form className="space-y-6 lg:grid grid-cols-2 gap-8  mb-6">
                        <div className="space-y-6">
                            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {topFormFields.map((field) => (
                                    <FormField key={field.id} {...field}   />
                                ))}
                            </fieldset>
                            <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {formFields.map((field) => (
                                    <FormField key={field.id} {...field}   />
                                ))}
                            </fieldset>
                            <div className="space-y-2">
                                <Label htmlFor="description" className="flex items-center">
                                    <BookmarkSimple size={18} className="mr-2" /> Description
                                </Label>
                                <Textarea id="description" placeholder={bookObject?.description || "Write description..."} ></Textarea>
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
                                    className="w-full rounded-lg border border-gray-300 bg-white p-3 text-sm font-medium text-gray-700 shadow-sm focus:border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-200"
                                    defaultValue={bookObject?.category || ""}
                                    
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
                            <Button type="submit" className="w-full flex items-center justify-center bg-gray-700 hover:bg-slate-500">
                                <Plus size={20} className="mr-2" />
                                Add Book
                            </Button>

                        </div>
                    </form>
                    <CardFooter>
                        <div className="text-sm text-gray-500 text-center">
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