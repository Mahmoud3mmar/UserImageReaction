import mongoose from "mongoose";


const reactionSchema = new mongoose.Schema({

    type:{
        type:String,
        enum:['LIKE']
    },
    reactedby:{
        type: mongoose.Schema.Types.ObjectId,
       ref:'user',
    },
    reactedto:{
        type: mongoose.Schema.Types.ObjectId,
       ref:'image',
    },


})


reactionSchema.post('find',(docs,next)=>{
    docs.forEach(d=>(d.path=process.env.BASE_URL+d.path))
    next()
})

const reactionModel= mongoose.model('image',reactionSchema)


export default reactionModel