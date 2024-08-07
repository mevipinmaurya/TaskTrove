import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
},
    { timestamps: true })

const Task = mongoose.model("Task", taskSchema);

export default Task;