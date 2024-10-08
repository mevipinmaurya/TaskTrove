import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import ProgressGraph from './ProgressGraph'

const Body = () => {

    return (
        <div className='w-full mt-8 gap-3 flex md:flex-row flex-col justify-around'>
            <div className='w-[95%] md:w-[58%] mb-20 flex flex-col p-5 shadow-lg rounded-lg border-2 border-slate-800'>
                <TodoList />
            </div>
            <div className='w-[95%] md:w-[38%] h-fit p-5 shadow-lg rounded-lg border-2 border-slate-800'>
                <AddTodo />
                {/* <ProgressGraph /> */}
            </div>
        </div>
    )
}

export default Body