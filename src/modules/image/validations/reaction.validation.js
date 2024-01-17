



import Joi  from "joi"

import {REACTIONS} from '../../../utils/enums.js'




const addReactionSchema=Joi.object({
    body:{type:Joi.string().required().valid(...Object.values(REACTIONS))
    },
    query:{},
    params:{imageId: Joi.string().required().hex().length(24)},


})




const getReactionsSchema=Joi.object({
    body:{},
    query:{},
    params:{imageId: Joi.string().required().hex().length(24)},


})



export{
    addReactionSchema,
    getReactionsSchema
}