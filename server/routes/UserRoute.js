import express from "express";
import { loginController, registerController } from "../controllers/UserController.js";
import { registerValidation, loginValidation } from "../middlewares/authValidation.js"; 

const router = express.Router()

router.post('/register', registerValidation ,registerController)

router.post('/login', loginValidation, loginController)


export default router