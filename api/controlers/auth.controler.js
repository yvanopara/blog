import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {errorHandler} from '../utils/error.js';




export const signup = async (req, res, next) =>{
     console.log(req.body);
    const {username, password, email} = req.body;
    if(!email|| !username|| !password || email==="" || password==="" || username==="")
    {
        next(errorHandler(400, "All fields are required"));
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        password:hashPassword,
        email,

    })
    try{
    await newUser.save();
    res.json({username, email});
    
    }catch(error){
        next(error);
    }
};
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if(!email|| !password || email==='' || password==='' )
    {
        next(errorHandler(400, "All fields are required"));
    }

    try{
        const validUser = await User.findOne({email});
        if(!validUser) {
            return next(errorHandler(404, "User not found"));
        }

        const validPasssword = bcryptjs.compare(password, validUser.password)
        if(!validPasssword){
           return  next(errorHandler(400, "Invalid password"));
        }
        
        const token = jwt.sign( {id: validUser._id}, process.env.JWT_SECRET);
        res.status(200).cookie('access_token', token, {
            httpOnly: true }).json(validUser)

    }  catch(error){
        next(error);
    }

}
