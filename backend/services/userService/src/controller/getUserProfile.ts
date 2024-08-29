import { Request,Response } from "express";
import User from "../model/userModel";

export const getUserProfile = async (req: any, res: Response) => {
    try {
        
        const user = await User.findById(req.userId); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};