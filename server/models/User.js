import mongoose from "mongoose";

const userSchmea = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const userModel = mongoose.model('Users', userSchmea)
export default userModel