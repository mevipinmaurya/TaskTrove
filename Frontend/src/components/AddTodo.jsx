import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

const AddTodo = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl text-[#297ABC] font-medium'>Pending Tasks</h1>
                <button className="btn btn-active bg-green-500 text-black text-lg flex justify-center align-middle items-center hover:bg-green-600" onClick={() => document.getElementById('my_modal_1').showModal()}>Add <IoMdAddCircle /></button>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">Add Your Tasks</h3>
                    <form action="" className='mt-3'>
                        <textarea className="textarea w-full border-b border-b-[#297ABC] focus:outline-none hover:outline-none outline-none focus:border-b-[#297ABC] resize-none" placeholder="Type here ..."></textarea>

                        <div className='flex justify-end'>
                            <button className='btn justify-end bg-[#C77B00] text-black hover:bg-[#C77B00] text-lg mt-4'>Add Task</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default AddTodo