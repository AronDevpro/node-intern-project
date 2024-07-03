import jwt from 'jsonwebtoken';
import hash from "../config/jwtConfig.js";


export const verifyToken =(req,res,next)=>{
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        req.user = jwt.verify(token, hash);
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token' });
    }

}