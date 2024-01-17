import { catchAsyncError } from "../../../utils/error.handler.js"
import UserModel from "../models/user.model.js"



const getAllUsers = catchAsyncError(async (req,res)=>{

    const Users = await UserModel
    .find({},{password:0})
    

    res.json({Users})
})



const getUser = catchAsyncError(async (req,res)=>{

    const User = await UserModel
    .findById(req.params.userId,{password:0})
    

    res.json({User})
})


const getImages = catchAsyncError(async (req,res)=>{

    const images = await imageModel
    .find({postedby:req.params.userId})


    res.json({images})
})



export {
    getAllUsers,
    getUser,
    getImages
}