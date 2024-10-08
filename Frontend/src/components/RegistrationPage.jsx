import React, { useContext, useState } from 'react'
import axios from "axios"
import { USER_API_ENDPOINT } from '../utils/Constant';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { TaskContext } from '../context/TaskContext';

const RegistrationPage = () => {

    const [state, setState] = useState("Login");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {setId} = useContext(TaskContext);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (state == "Login") {
            // Login
            try {
                const res = await axios.post(`${USER_API_ENDPOINT}/login`, {
                    email, password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })

                if (res.data.success) {
                    setEmail("");
                    setPassword("");
                    navigate("/")
                    // console.log(res)

                    // console.log(res.data.user._id);
                    setId(res.data.user._id);
                    localStorage.setItem("token", res.data.token)

                    toast.success(res.data.message);
                }
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);
            }
        }
        else{
            // Signup
            try {
                const res = await axios.post(`${USER_API_ENDPOINT}/register`, {
                    username, email, password
                },{
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })

                if(res.data.success){
                    setUsername("");
                    setEmail("");
                    setPassword("");

                    setState("Login");
                    toast.success(res.data.message);
                }
            } catch (error) {
                console.log(error)
                // toast.error("Something went wrong")
                toast.error(error.response.data.message)
            }
        }
    }


    return (
        <div className='w-full flex justify-center items-center flex-col p-5 mt-7'>
            <div className='w-[90%] sm:w-1/2 md:w-1/3 p-7 flex flex-col gap-4 rounded-lg shadow-lg border-2 border-slate-800'>

                <h1 className='text-xl text-[#297ABC] font-bold mb-5'>{state}</h1>
                <form className='flex flex-col gap-4' onSubmit={submitHandler}>

                    {
                        state == "SignUp"
                            ? <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </label>
                            : <></>
                    }


                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="grow" placeholder="Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="grow" placeholder='Password' />
                    </label>

                    <div className='flex justify-end'>
                        <button type='submit' className="btn btn-active bg-green-600 text-black text-lg flex justify-center align-middle items-center hover:bg-green-700">{state}</button>
                    </div>

                    <div>
                        {
                            state == "SignUp"
                                ? <p>Already have an account? <span className='text-blue-600 font-semibold cursor-pointer' onClick={() => setState("Login")}>Login</span></p>
                                : <p>Don't have account? <span className='text-blue-600 font-semibold cursor-pointer' onClick={() => setState("SignUp")}>SignUp</span></p>
                        }

                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage