import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoList = () => {
    return (
        <div className='mt-7'>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover text-lg">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td><div className='flex justify-center gap-2'>
                                <div className='cursor-pointer text-yellow-600 hover:scale-125 text-xl'><FaRegEdit /></div>
                                <div className='cursor-pointer text-red-700 hover:scale-125 text-xl'>
                                    <MdDelete />
                                </div>
                            </div>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover text-lg">
                            <th>2</th>
                            <td>Cy Ganderton</td>
                            <td><div className='flex justify-center gap-2'>
                                <div className='cursor-pointer text-yellow-600 hover:scale-125 text-xl'><FaRegEdit /></div>
                                <div className='cursor-pointer text-red-700 hover:scale-125 text-xl'>
                                    <MdDelete />
                                </div>
                            </div>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover text-lg">
                            <th>3</th>
                            <td>Cy Ganderton</td>
                            <td><div className='flex justify-center gap-2'>
                                <div className='cursor-pointer text-yellow-600 hover:scale-125 text-xl'><FaRegEdit /></div>
                                <div className='cursor-pointer text-red-700 hover:scale-125 text-xl'>
                                    <MdDelete />
                                </div>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList