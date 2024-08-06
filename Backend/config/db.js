import mongoose from 'mongoose';

const databaseConnection = () => {
    mongoose.connect("mongodb+srv://vipinpoko:acrhMlsEkP4uX13s@cluster0.ltin8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
        console.log("Connected to database")
    }).catch((error) => {
        console.log(error)
    })
}

export default databaseConnection;