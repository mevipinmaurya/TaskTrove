import express from 'express';
import databaseConnection from './config/db.js';
import userRouter from './routes/UserRoute.js';

const app = express();
const port = 3000;

// Database connection
databaseConnection();

// Middlewares
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


// API Endpoints
app.use("/api/v1/user", userRouter)

app.get("/", (req, res) => {
    res.send("I am root");
})



app.listen(port, () => {
    console.log(`Server listing on port ${port}`)
})