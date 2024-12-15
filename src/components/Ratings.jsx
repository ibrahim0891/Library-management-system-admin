import { Star } from "phosphor-react";

 


let Ratings = ({startCount}) => { 
    
    const rating = {
      score: startCount,
      reviewCount: Math.ceil(Math.random() * 250),
    };
  return (
      <div className='mt-6  bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-3'>Rating</h2>
          <div className='flex items-center'>
              <span className='text-3xl font-bold text-yellow-500 mr-2'>
                  {rating.score.toFixed(1)}
              </span>
              <div className='flex'>
                  {[1, 2, 3, 4, 5].map((starNumber) => (
                      <Star
                          key={starNumber}
                          weight={starNumber <= Math.floor(rating.score) ? 'fill' : 'regular'}
                          className='w-6 h-6 text-yellow-500'
                      />
                  ))}
              </div>
              <span className='ml-2 text-sm text-gray-600'>({rating.reviewCount} reviews)</span>
          </div>
      </div>
  );
}

export default Ratings;