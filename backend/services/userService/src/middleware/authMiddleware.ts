import { NextFunction } from "express";

import jwt from 'jsonwebtoken'

const JWT_SECRET = '_jwt_secret'

export const authMiddleWare = (req:any,res:any,next:NextFunction)=>{
    const token = req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.json({message:'Autherization failed;no token provided'})
    }
    try {
        const decoded = jwt.verify(token,JWT_SECRET)as {id:string,email:string}
        req.userId = decoded.id
        next()
    } catch (error) {
        res.status(403).json({ message: 'Authentication failed: Invalid token' });
    }
}