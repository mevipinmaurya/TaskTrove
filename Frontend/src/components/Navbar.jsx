import React from 'react'
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-lg border-b-2 border-b-slate-800">
                <a className="btn btn-ghost text-2xl hover:bg-transparent text-[#E34432]">TaskTrove</a>
                <div className='flex justify-end w-full mr-5 text-3xl cursor-pointer'>
                    <span className='hover:scale-125 text-red-700 tooltip tooltip-bottom' data-tip="Logout"><IoMdLogOut /></span>
                </div>
            </div>
        </>
    )
}

export default Navbar