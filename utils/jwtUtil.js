import jwt from 'jsonwebtoken'
import hash from "../config/jwtConfig.js";

export function generateToken(user){
    const payload = {
        id: user._id,
        email: user.email,
    }
    return jwt.sign(payload,hash,{expiresIn: "24H"})
}