


let BookInformationTable = ({ bookData }) => {
    const bookDetails = [
        { label: "Author", value: bookData.authorName },
        { label: "Publisher", value: bookData.publisher ? bookData.publisher : "Not available" },
        { label: "ISBN", value: bookData.isbn },
        { label: "Published", value: bookData.publishYear },
        { label: "Pages", value: bookData.pages },
        { label: "Language", value: "English" },
    ];
    return (
        <table className='w-full border-collapse border-2 border-indigo-200 rounded-lg overflow-hidden'>
            <tbody className="text-sm text-gray-700">
                {bookDetails.map((detail, index) => (
                    <tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-slate-100" : ""
                            } hover:bg-gray-100 transition duration-300`}
                    >
                        <td className='py-4 px-6 text-slate-600 font-semibold '>
                            {detail.label}
                        </td>
                        <td className='py-4 px-6 text-gray-800 font-medium  whitespace-nowrap overflow-hidden text-ellipsis'>
                            {detail.value}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}; 

export default BookInformationTable;
