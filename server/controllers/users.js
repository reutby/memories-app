import Mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

const errorsMessages = {
    userNotExist:"User doesn't exist.",
    isPasswordCorrect:"Invalid credentials, please try again.",
    defaultMessage:"Something went wrong.",
    userAlreadyExist:"User already exist.",
    passwordNotMatch:"Passwords don't match.",
}
export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email }).lean();
        if (!existingUser) return res.status(404).json({ message: errorsMessages.userNotExist });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: errorsMessages.isPasswordCorrect });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id },  process.env.SECRET_TOKEN, { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: errorsMessages.defaultMessage });

    }
}

export const signup = async (req, res) => {
    const { firstName, lastName, userName, email, password, confirmedPassword,imageUrl } = req.body;
    try {
        const existingUser = await User.findOne({ email }).lean();
        if (existingUser) return res.status(400).json({ message: errorsMessages.userAlreadyExist });
        if (password !== confirmedPassword) return res.status(400).json({ message: errorsMessages.passwordNotMatch });
        
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`,userName,imageUrl});
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET_TOKEN, { expiresIn: "1h" });
        res.status(200).json({result,token});
        
    } catch (error) {
        res.status(500).json({message:errorsMessages.defaultMessage});

    }
}
