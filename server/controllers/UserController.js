import userModel from "../models/User.js"

export const registerController = async (req, res) => {
    try { 

        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Enter name/email/password' })
        }

        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(409).json({ success: false, message: 'User already exists on this email! Please login.' })
        } else {
            const newUser = new userModel({
                name,
                email,
                password
            })

            await newUser.save()
            res.json({ success: true, newUser })

        }


    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}


export const loginController = async (req, res) => {
    try {

        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if(user){           
            if (user.password === password) {
                return res.status(200).json({ success: true, user })
            } else {
                return res.status(401).json({ success: false, message: "Password is wrong" })
            }
            
        } else {
            return res.json({success: false, message:'User not found'})
        }

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }

}