import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'


export const signup = async (req, res, next) =>{
    // console.log(req.body);
    const {username, password, email} = req.body;
    if(!email|| !username|| !password || email==="" || password==="" || username==="")
    {
        next(errorHandler(400, "All fields are required"));
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        password:hashPassword,
        email

    })
    try{
    await newUser.save();
    res.json("signup successful");
    
    }catch(error){
        next(error);
    }
}
