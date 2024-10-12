import { BookOpen, Books, Users, X } from "phosphor-react";
import Header from "../components/Header";
import SectionContainer from "../components/SectionContainer";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


const DashBoardContent = () => {
    let { context, setContext } = useOutletContext()
    useEffect(() => {
        setContext({ pageTitle: null })
    }, [])
    const [infoVisible, setInfoVisible] = useState(true)
    return (
        <>
            {infoVisible && <div className="-m-4 mb-4 p-2 pr-4 bg-amber-50 text-amber-700 flex justify-between items-center">
                <span> ভবিষ্যতে আমাদের ড্যাশবোর্ডে অনেক গুলো সেকশন থাকবে । </span>
                <X onClick={() => setInfoVisible(false)}></X>
            </div>}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-1 overvflow-y-auto bP">
                <div className="border-2 p-4 rounded-lg hover:shadow-md text-black transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <Books size={32} className="text-blue-500 mb-2" />
                    <h2 className="text-md md:text-lg font-semibold">Total Books</h2>
                    <span className="text-2xl font-bold text-gray-700">125</span>
                </div>
                <div className="border-2 p-4 rounded-lg hover:shadow-md text-black transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <Books size={32} className="text-green-500 mb-2" />
                    <h2 className="text-md md:text-lg font-semibold">Available Books</h2>
                    <span className="text-2xl font-bold text-gray-700">252</span>
                </div>
                <div className="border-2 p-4 rounded-lg hover:shadow-md text-black transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <Users size={32} className="text-purple-500 mb-2" />
                    <h2 className="text-md md:text-lg font-semibold">Total Members</h2>
                    <span className="text-2xl font-bold text-gray-700">125</span>
                </div>
                <div className="border-2 p-4 rounded-lg hover:shadow-md text-black transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <BookOpen size={32} className="text-orange-500 mb-2" />
                    <h2 className="text-md md:text-lg font-semibold">Borrowed Books</h2>
                    <span className="text-2xl font-bold text-gray-700">125</span>
                </div>
                <div className="border-2 p-4 rounded-lg hover:shadow-md text-black transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <BookOpen size={32} className="text-orange-500 mb-2" />
                    <h2 className="text-md md:text-lg font-semibold">Overdue Books</h2>
                    <span className="text-2xl font-bold text-gray-700">25</span>
                </div>
            </div>

        </>
    )
}
const Dashboard = () => {

    return (
        <>

            <SectionContainer children={<DashBoardContent />} title={null} />
        </>
    );


}

export default Dashboard;