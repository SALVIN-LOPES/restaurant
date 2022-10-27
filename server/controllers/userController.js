import bcrypt from "bcrypt";

import UserModel from "../models/userModel.js";

const secret = "Restaurent";

export const signin = async (req, res) => {
    const {email,password} = req.body;
    try{
        const user = await UserModel.findOne({email});
        if(!user) return res.status(400).json({message: "User doesn't exist...!"});
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials...!"});
        res.status(200).json({result: user});
    } catch(error){
        res.status(500).json({message: "Something went wrong...!"});
        console.log("Server signin: "+error);
    }
};

export const signup = async (req,res) => {
    const {name, email, password, age, number} = req.body;
    // console.log(email);
    try{
        const user = await UserModel.findOne({email: email});
        if(user) {
            return res.status(400).json({message: "User already exists..!"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await UserModel.create({ name:name,email:email, password: hashedPassword,age:age,number:number});
        res.status(201).json({ result:result });
    }catch (error) {
        res.status(500).json({ message: "Something went wrong...!" });
        console.log("Server signup: "+error);
    }
};