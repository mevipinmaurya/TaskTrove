import React, { createContext, useState } from 'react'

export const TaskContext = createContext(null);

const TaskContextProvider = ({children})=>{
    const [id, setId] = useState("");

    const contextValue = {
        id,
        setId
    }

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}


export default TaskContextProvider;