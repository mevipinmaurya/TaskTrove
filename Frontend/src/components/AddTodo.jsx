import React, { useContext, useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { TASK_API_ENDPOINT } from '../utils/Constant';
import { TaskContext } from '../context/TaskContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {

    const [description, setDescription] = useState();

    const navigate = useNavigate();

    const { id } = useContext(TaskContext);
    // console.log(id);

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post(`${TASK_API_ENDPOINT}/add`, { description, id }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })

            console.log(res.data);
            if (res.data.success) {
                setDescription("");
                navigate("/");
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl text-[#297ABC] font-medium'>Add Your Tasks</h1>
                {/* <button className="btn btn-active bg-green-500 text-black text-lg flex justify-center align-middle items-center hover:bg-green-600" onClick={() => document.getElementById('my_modal_1').showModal()}>Add <IoMdAddCircle /></button> */}
            </div>

            <div className='mt-7'>
                <form onSubmit={submitHandler} action="" className='mt-3'>
                    <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="textarea w-full border-b border-b-[#297ABC] focus:outline-none hover:outline-none outline-none focus:border-b-[#297ABC] resize-none" placeholder="Type here ..." required></textarea>

                    <div className='flex justify-end'>
                        <button type='submit' className='btn justify-end bg-[#C77B00] text-black hover:bg-[#C77B00] text-lg mt-4'>Add Task</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddTodo