
import jwt from 'jsonwebtoken'

export const ensureAuthenticated = (req, res, next )=>{
    const token = req.headers['authorization']
    if(!token){
        return res.json({message: 'Unauthorized, jwt token is required'})
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()

    } catch (err) {
        res.json({message: "Unauthorized, JWT is required"})
    }

}