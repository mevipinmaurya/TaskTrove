import React, { useContext, useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TaskContext } from '../context/TaskContext';
import axios from 'axios';
import { TASK_API_ENDPOINT } from '../utils/Constant';

const TodoList = () => {

    const [tasks, setTasks] = useState([]);

    const { id } = useContext(TaskContext);


    const fetchTask = async () => {
        try {
            const res = await axios.post(`${TASK_API_ENDPOINT}/get`, {
                id
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })

            // console.log(res.data.tasks);
            setTasks(res.data.tasks)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteHandler = async (id) => {
        try {
            const res = await axios.post(`${TASK_API_ENDPOINT}/delete`, {
                id
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTask()
    }, [tasks])

    return (
        <div className='mt-2'>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-3xl text-[#297ABC] font-medium'>Pending Tasks</h1>
                <form>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </form>
            </div>
            <div className="overflow-x-auto mt-8">
                <table className="table">
                    <tbody>
                        {
                            tasks.length > 0
                                ? tasks.map((task, i) => (
                                    <tr key={i} className="hover text-lg">
                                        <th>{i + 1}</th>
                                        <td>{task.description}</td>
                                        <td><div className='flex justify-center gap-2'>
                                            <div className='cursor-pointer text-yellow-600 hover:scale-125 text-xl'><FaRegEdit /></div>
                                            <div className='cursor-pointer text-red-700 hover:scale-125 text-xl' onClick={() => deleteHandler(task._id)}>
                                                <MdDelete />
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                ))
                                : <h1 className='flex w-full justify-center items-center text-slate-500'>No task found </h1>
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList