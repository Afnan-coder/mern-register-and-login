import express from "express";
import { ensureAuthenticated } from "../middlewares/authMiddleware.js";
const router = express.Router()

router.get('/products', ensureAuthenticated, (req, res)=>{ 

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