import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({


    name:String,
    email:{
        type:String,
        unique:true,
        lowercase:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password:{
        type:String,

    },
    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:'USER'
    }

})

const UserModel= mongoose.model('user',UserSchema)


export default UserModel