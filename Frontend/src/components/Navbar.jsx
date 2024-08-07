import React from 'react'
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/register");
    }
    return (
        <>
            <div className="navbar bg-base-100 shadow-lg border-b-2 border-b-slate-800">
                <a className="btn btn-ghost text-2xl hover:bg-transparent text-[#E34432]">TaskTrove</a>
                {
                    token
                        ? <div className='flex justify-end w-full mr-5 text-3xl cursor-pointer'>
                            <span className='hover:scale-125 text-red-700 tooltip tooltip-bottom' data-tip="Logout" onClick={logout}><IoMdLogOut /></span>
                        </div>
                        : <></>
                }

            </div>
        </>
    )
}

export default Navbar