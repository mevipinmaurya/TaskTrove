import Task from "../model/Task.model.js";
import User from "../model/User.model.js"

// Add Task
const addTask = async(req, res)=>{
    try {
        const {description, id} = req.body
        if(!description){
            return res.status(401).json({
                success : false,
                message : "Task description required"
            })
        }

        const user = await User.findById(id).select("-password");
        const task = new Task({
            description : description,
            userId : id
        })

        await task.save();

        return res.status(201).json({
            success : true,
            message : "Task added"
        })

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success : false,
            message : "Error"
        })
    }
}


// Update Tasks
const updateTask = async(req, res)=>{
    try {
        const {id, description} = req.body;
        const task = await Task.findByIdAndUpdate(id, {description : description})

        return res.status(201).json({
            success : true,
            message : "Task Edited"
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success : false,
            message : "Error"
        })
    }
}


// Delete Tasks
const deleteTask = async (req, res)=>{
    try {
        const {id} = req.body;
        const task = await Task.findByIdAndDelete(id)
        return res.status(201).json({
            success : true,
            message : "Task removed"
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success : false,
            message : "Error"
        })
    }
}

// Fetch Tasks
const getTask = async(req, res)=>{
    try {
        const {id} = req.body;
        const allTask = await Task.find({userId : id});

        return res.status(201).json({
            tasks : allTask
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success : false,
            message : "Error"
        })
    }
}

export {addTask, updateTask, deleteTask, getTask}