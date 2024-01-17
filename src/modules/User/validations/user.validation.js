

import Joi  from "joi"

const getAllUsersSchema=Joi.object({
    body:{type:Joi.string().required().valid(...Object.values(REACTIONS))
    },
    query:{},
    params:{imageId: Joi.string().required().hex().length(24)},


})




const getUserSchema=Joi.object({
    body:{},
    query:{},
    params:{userId: Joi.string().required().hex().length(24)},


})



const getImagesShema=Joi.object({
    body:{},
    query:{},
    params:{userId: Joi.string().required().hex().length(24)},


})



export {

    getAllUsersSchema,
    getUserSchema,
    getImagesShema
}

