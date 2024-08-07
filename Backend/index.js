import express from 'express';
import databaseConnection from './config/db.js';
import userRouter from './routes/UserRoute.js';
import cors from "cors";

const app = express();
const port = 3000;

// Database connection
databaseConnection();

// Middlewares
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

const corsOption = {
    origin : "http://localhost:5173",
    credentials : true,
}
app.use(cors(corsOption))


// API Endpoints
app.use("/api/v1/user", userRouter)

app.get("/", (req, res) => {
    res.send("I am root");
})



app.listen(port, () => {
    console.log(`Server listing on port ${port}`)
})