import { catchAsyncError } from "../../../utils/error.handler.js";
import fs from 'fs'
import {v2 as cloudinary} from 'cloudinary';

import path from 'path'
import { __dirname } from "../../../../bootstrap.js";
const getAllImages = catchAsyncError(async (req,res)=>{

    const images = await imageModel
    .find()
    .popualte('postedby',{name:1,email:1})

    res.json({images})
})




const PostImage=catchAsyncError(async(req,res)=>{
    const{id}=req.user
    const{path}=req.file


    const {public_id,secure_url} = await cloudinary.v2.uploader.upload(path)
    await imageModel.create({
        name:public_id,
        path:secure_url,
        postedby:id
    })

    res.status(201).json({message:'imaged posted successfully..'})

})




const getImage=catchAsyncError(async(req,res)=>{

    const image = await imageModel
    .findById(req.params.imageId)    
    .popualte('postedby',{name:1,email:1})


    res.json({image})

})


const deleteImage=catchAsyncError(async(req,res)=>{

    const image = await imageModel
    .findById(req.params.imageId)    
    // fs.unlinkSync(path.join(__dirname +'uploads'+image.path))
    // image.deleteOne()
    cloudinary.v2.uploader.upload(path).destroy(image.name)
    image.deleteOne()
    res.json({image})

})


export {
    getAllImages,
    PostImage,
    getImage,
    deleteImage
}