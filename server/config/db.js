import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/userDB')
    .then(()=>console.log('Database connected'))
    .catch((err)=> console.log(err))
}

export default connectDB