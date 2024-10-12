import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label } from "keep-react"
import { Barcode, BookmarkSimple, BookOpen, Buildings, CalendarBlank, Plus, TextT, User } from "phosphor-react"
import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"



const AddBook = () => {
    let { context, setContext } = useOutletContext()
    useEffect(() => {
        setContext({ title: "Add new book", dropdownMenuItems: { Cancel: "Add new book" } })
    }, [])
    return (
        <div className="p-4 md:flex items-center justify-center h-full">
            <Card className="block min-w-full md:min-w-[500px] m-auto">
                <CardContent>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <BookOpen size={24} className="mr-2" />
                            Add new book
                        </CardTitle>
                        <CardDescription>Add a new book for users to read.</CardDescription>
                    </CardHeader>
                    <form className="space-y-6 my-4">
                        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="bookName" className="flex items-center">
                                    <TextT size={18} className="mr-2" />
                                    Book Name
                                </Label>
                                <Input id="bookName" placeholder="Enter book name" type="text" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="authorName" className="flex items-center">
                                    <User size={18} className="mr-2" />
                                    Author Name
                                </Label>
                                <Input id="authorName" placeholder="Enter author name" type="text" />
                            </div>
                        </fieldset>
                        <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="isbn" className="flex items-center">
                                    <Barcode size={18} className="mr-2" />
                                    ISBN
                                </Label>
                                <Input id="isbn" placeholder="Enter ISBN" type="number" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="publisher" className="flex items-center">
                                    <Buildings size={18} className="mr-2" />
                                    Publisher
                                </Label>
                                <Input id="publisher" placeholder="Enter publisher" type="text" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="publishYear" className="flex items-center">
                                    <CalendarBlank size={18} className="mr-2" />
                                    Publish Year
                                </Label>
                                <Input id="publishYear" placeholder="Enter publish year" type="number" />
                            </div>
                        </fieldset>
                        <div>
                            <Label htmlFor="category" className="flex items-center mb-2">
                                <BookmarkSimple size={18} className="mr-2" />
                                Category
                            </Label>
                            <select
                                id="category"
                                className="w-full rounded-lg border border-gray-300 bg-white p-3 text-sm font-medium text-gray-700 shadow-sm focus:border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-200"
                            >
                                <option value="">Select Category</option>
                                <option value="fiction">Fiction</option>
                                <option value="non-fiction">Non-Fiction</option>
                                <option value="mystery">Mystery</option>
                                <option value="romance">Romance</option>
                                <option value="science-fiction">Science Fiction</option>
                            </select>
                        </div>
                        <Button type="submit" className="w-full flex items-center justify-center bg-gray-700 hover:bg-slate-500">
                            <Plus size={20} className="mr-2" />
                            Add Book
                        </Button>
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

export default AddBook