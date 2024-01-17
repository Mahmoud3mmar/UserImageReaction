import { catchAsyncError } from "../../../utils/error.handler.js"
import reactionModel from "../models/reaction.model.js"



const addReaction=catchAsyncError(async(req,res)=>{
    
    await reactionModel.create({
        type:req.body.type,
        reactedby:req.user.id,
        reactedto:req.user.imageId,
        
    })

    resjson({message:'Reacted successfully..'})

})


const getReactions = catchAsyncError(async (req,res)=>{

    const reactions = await reactionModel
    .find({
        reactedto:req.user.imageId,

    })
    

    res.json({reactions})
})


export {
    addReaction,
    getReactions
}

