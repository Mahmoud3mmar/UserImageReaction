import bcrypt from 'bcrypt'


import { AppError, catchAsyncError } from "../../../utils/error.handler.js";
import UserModel from '../../User/user.model.js';
import jwt from 'jsonwebtoken';









const signin=catchAsyncError(async(req,res)=>{

    const {email,password}=req.body
    const existeduser = await UserModel.findOne({email})

    if(!existeduser || !bcrypt.compareSync(password,existeduser.password)) throw new AppError('Invalid credentials',400)

    const {name,role,_id:id}=existeduser

    const token = jwt.sign({ name,role,id,email },process.env.SECRET)

    res.status(201).json({token,message:'Signed in successfully ..'})
})


const signup=catchAsyncError(async(req,res)=>{


    const {name,email,password}=req.body
    const hashedpassword= bcrypt.hashSync(password,Number(process.env.SALT))
    await UserModel.create({

        name,
        email,
        password:hashedpassword
    })
    res.status(201).json({message:'Signed up successfully ..'})

})


export {
    signin,
    signup
}