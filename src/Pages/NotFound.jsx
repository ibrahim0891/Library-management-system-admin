import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";





const NotFound = () => {
    let { context, setContext } = useOutletContext()
    useEffect(() => {
        setContext({ pageTitle: "Oops! Page Not Found" })
    }, [])
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
            <span className="text-8xl mb-6">🚧</span>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Under Construction</h1>
                <p className="text-xl text-gray-600">রাস্তা চলছে , কাজ বন্ধ </p>
            </div>
            <Link to={'/'} className="bg-sky-400 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;