import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModal from '../models/user.js';

const userToken = process.env.USER_TOKEN;

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try{
        const existingUser = await UserModal.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, userToken, {expiresIn: "1h"});

        res.status(200).json({ result: existingUser, token });
    } 
    catch (error) {
        res.status(500).json({ message: "Something went wrong" + error});
        console.log(error);
    }
}

export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const userToken = process.env.USER_TOKEN;

    try {
        const existingUser = await UserModal.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User already exists."});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName}` `${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id }, userToken, {expiresIn: "1h"});

        res.status(200).json({ result, token });

    } catch(error){
        res.status(500).json({ message: "Something went wrong" + error});

        console.log(error);
    }
}