import mongoose from "mongoose";


const imageSchema = new mongoose.Schema({


    name:String,
    path:String,
    postedby:{
       type: mongoose.Schema.Types.ObjectId,
       ref:'user',
    },


})


imageSchema.post('find',(docs,next)=>{
    docs.forEach(d=>(d.path=process.env.BASE_URL+d.path))
    next()
})

const imageModel= mongoose.model('image',imageSchema)


export default imageModel