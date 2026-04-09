import express from "express";
import { ensureAuthenticated } from "../middlewares/authMiddleware.js";
const router = express.Router()

router.get('/products', ensureAuthenticated, (req, res)=>{ 

    console.log('------- Loged in User --------', req.user)

    res.json([
        {
            product: "Mobile",
            price: 12000
        },
        {
            product: 'TV',
            price: 20000
        }
    ])

} )



export default router