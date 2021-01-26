import Mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email }).lean();
        if (!existingUser) return res.status(404).json({ message: "user dosn't exist" });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "invalid credentials" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id },  process.env.SECRET_TOKEN, { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });

    }
}

export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmedPassword } = req.body;
    try {
        const existingUser = await User.findOne({ email }).lean();
        if (existingUser) return res.status(400).json({ message: "user already exist" });
        if (password !== confirmedPassword) return res.status(400).json({ message: "Passwords don't match. " });
        
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET_TOKEN, { expiresIn: "1h" });
        res.status(200).json({result,token});

    } catch (error) {
        res.status(500).json({message:'Something went wrong. '});

    }
}
