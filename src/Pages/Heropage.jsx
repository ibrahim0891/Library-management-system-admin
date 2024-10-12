




const Heropage =() => {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Bookstore</h1>
        <p className="text-lg text-gray-600">Discover a world of books and stories</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Explore Books
        </button>
      </div>
    </div>
  );
}

export default Heropage;