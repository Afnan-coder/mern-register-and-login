import userModel from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

            newUser.password = await bcrypt.hash(password, 10)

            await newUser.save()
            res.status(201).json({ success: true, message: 'Register successfull' })

        }

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }

}


export const loginController = async (req, res) => {
    try {

        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (user) {

            const isMatch = await bcrypt.compare(password, user.password)

            if (isMatch) {

                const jwtToken = jwt.sign(
                    { email: user.email, _id: user._id },
                    process.env.JWT_SECRET,
                    { expiresIn: '24h' }
                )

                return res.status(200).json({
                    success: true,
                    message: 'Login successfully',
                    jwtToken,
                    email,
                    name: user.name
                })

            } else {
                return res.status(401).json({
                    success: false,
                    message: "Password is wrong"
                })
            }

        } else {
            return res.status(401).json({
                success: false,
                message: 'Auth failed email or password is wrong'
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}