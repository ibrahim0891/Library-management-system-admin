import { Plus, Star, User } from "phosphor-react";
const reviews = [
    {
        id: 1,
        author: "John Doe",
        rating: 4,
        comment: "A fascinating read that explores the future in a unique way.",
        date: "2023-05-15",
    },
    {
        id: 2,
        author: "Jane Smith",
        rating: 5,
        comment: "Absolutely loved it! Couldn't put it down.",
        date: "2023-05-10",
    },
    {
        id: 3,
        author: "Mike Johnson",
        rating: 3,
        comment:
            "Interesting concepts, but the pacing was a bit slow for my taste.",
        date: "2023-05-05",
    },
];

let Reviews = () => {
    return (
        <div className='mt-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                Reviews
            </h2>
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className='mb-6 pb-6 border-b border-gray-200 last:border-b-0'
                >
                    <div className='flex items-center mb-3'>
                        <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3'>
                            <User
                                weight='bold'
                                className='w-6 h-6 text-gray-600'
                            />
                        </div>
                        <div>
                            <p className='font-semibold text-gray-800'>
                                {review.author}
                            </p>
                            <div className='flex items-center'>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        weight={i < review.rating ? 'fill' : 'regular'}
                                        className='w-4 h-4 text-yellow-500'
                                    />
                                ))}
                                <span className='ml-2 text-sm text-gray-500'>
                                    {review.date}
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className='text-gray-700 leading-relaxed'>
                        {review.comment}
                    </p>
                </div>
            ))}
            <button
                className='my-6 mx-auto  px-6 py-3 border rounded-md text-gray-400 hover:text-gray-700 transition duration-300 ease-in-out flex items-center justify-center w-full sm:w-auto'
                onClick={() => {
                    // Handle load more button click
                }}
            >
                <Plus weight='bold' className='w-5 h-5 mr-2' />
                Load More Reviews
            </button>
        </div>
    );
};

export default Reviews;
