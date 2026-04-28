import mongoose from "mongoose";
   
export const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URI) 
    .then(()=>console.log('Database connected'))
    .catch((err)=> console.log(err))
}

export default connectDB