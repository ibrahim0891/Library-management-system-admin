import {
    Book,
    List,
    ListBullets,
    PaintBrush,
    Plus,
    Sparkle,
    Star,
    CaretLeft,
    CaretRight,
    DotsThree,
} from "phosphor-react";


import {
    Pagination,
    PaginationItem,
    PaginationList,
    PaginationNavigator,
} from "keep-react"; 


import React, { useContext, useState } from "react";  
import { CatagoryContext } from "../Context/BookContext";
import Header from "./Header";
import { BookCard } from "./BookCard";
 

//books for aarts and book for histroy will be imported here as a context then we will map them

const CategoryCard = ({ name, icon, totalBooks }) => (
    <div className=' rounded-lg border px-4 py-2 flex md:flex-col items-center space-x-3 cursor-pointer hover:bg-gray-100 transition duration-200 '>
        <span className='text-2xl mb-2'>{icon}</span>
        <span className='font-medium text-lg text-gray-700'>{name}</span>
        <span className='text-sm text-gray-500 whitespace-nowrap'>
            {totalBooks} books
        </span>
    </div>
);

let BookCatagories = () => {
    const [selectedCategory, setSelectedCategory] = useState("arts");
    const [active, setActive] = useState("arts");

    const [activeBook, setActiveBook] = useState(0);
 
    const {catagories , BookCatagoryMapping} = useContext(CatagoryContext); 
console.log(catagories, BookCatagoryMapping);
    return (  
                <div className='p-3 border-gray-200 rounded-lg  mt-6 w-full shadow-sm overflow-auto '>
                     
                    <div className=' flex gap-2 md:gap-4 overflow-x-auto p-2'>
                        {catagories.map((category) => (
                            <div
                                key={category.id}
                                onClick={() => {
                                    setSelectedCategory(
                                        category.name.toLowerCase()
                                    );
                                    setActive(category.name.toLowerCase());
                                }}
                                className={`${
                                    active === category.name.toLowerCase()
                                        ? "ring-1 ring-slate-300 rounded-md bg-slate-100"
                                        : ""
                                } hover:bg-slate-50 transition-colors duration-200  flex-shrink-0`}
                            >
                                <CategoryCard
                                    key={category.id}
                                    name={category.name}
                                    icon={category.icon}
                                    totalBooks={category.totalBooks} 
                                    className='cursor-pointer bg-transparent'
                                />
                            </div>             
                        ))}
                    </div>

                    {/* //book of the catagroies is mapped and displayed here */}
                    <div className='my-3'>
                        <Header
                            title={selectedCategory} 
                        />

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-3 '>
                            {BookCatagoryMapping[selectedCategory] != undefined ? (
                                BookCatagoryMapping[selectedCategory].map(
                                    (book, index) => (
                                        <div
                                            key={index}
                                            onClick={() =>
                                                setActiveBook(book.id)
                                            }
                                            className={`${
                                                activeBook === book.id
                                                    ? "ring-2 ring-slate-500 rounded-md bg-slate-100"
                                                    : ""
                                            } hover:bg-slate-50 transition-colors duration-200`}
                                        >
                                            <BookCard
                                                book={book}
                                            />
                                        </div>
                                    )
                                )
                            ) : (
                                <div className='w-full h-108 flex items-center justify-center'>
                                    {" "}
                                    No books found!{" "}
                                </div>
                            )}
                        </div>
                        {/* {catagoryAndBooks[selectedCategory] != undefined ? (
                            <div className='pt-5 filter opacity-50' title="Not implemented yet">
                                <Pagination shape='rounded' className="m-auto justify-center">
                                    <PaginationNavigator>
                                        <CaretLeft size={18} />
                                        Previous
                                    </PaginationNavigator>
                                    <PaginationList>
                                        <PaginationItem>1</PaginationItem>
                                        <PaginationItem active>
                                            2
                                        </PaginationItem>
                                        <PaginationItem>3</PaginationItem>
                                        <PaginationItem>4</PaginationItem>
                                        <PaginationItem>
                                            <DotsThree size={20} />
                                        </PaginationItem>
                                        <PaginationItem>10</PaginationItem>
                                    </PaginationList>
                                    <PaginationNavigator>
                                        Next
                                        <CaretRight size={18} />
                                    </PaginationNavigator>
                                </Pagination>
                            </div>
                        ) : null} */}
                    </div>
                </div>
               
    );
};

export default BookCatagories;
