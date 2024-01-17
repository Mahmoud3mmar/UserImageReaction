import Joi  from "joi"



const getAllImagesSchema= Joi.object({
    body:{},
    query:{},
    params:{}


})


const postImageSchema= Joi.object({
    body:{},
    query:{},
    params:{},
    file:Joi.object()

})



const getImageSchema= Joi.object({
    body:{},
    query:{},
    params:{imageId: Joi.string().required().hex().length(24)},


})



const deleteImageSchema= Joi.object({
    body:{},
    query:{},
    params:{imageId: Joi.string().required().hex().length(24)},


})



export {

    getAllImagesSchema,
    postImageSchema,
    getImageSchema,
    deleteImageSchema
}