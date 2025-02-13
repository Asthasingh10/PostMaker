const User = require("../models/user-model");
const bcrypt=require("bcryptjs");

const home=async(req,res)=>{
    try{
        res.status(200).send("Welcome to for PostMaker Website");
    }catch(error){
        console.log(error);
    }
}

const register=async(req,res)=>{
    try{
        // console.log(req.body);
        const {email,password}=req.body;
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"Account Already Exist"});
        }
       const userCreated= await User.create({email,password});
        res.status(201).json({msg:"Registration Successfull",token:await userCreated.generateToken(),userId:userCreated._id.toString()});
    }catch(error){
        // res.status(500).send("Internal Not Found");
        next(error);
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const user = await userExist.comparePassword(password);
        if (user) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}
const user=async(req,res)=>{
    try{
        const userData=req.user;
        console.log(userData);
        return res.status(200).json({userData});
    }catch(error){
        console.log(`Error from the user route ${error}`);
    }
}

module.exports={home,register,login,user};