import { Router } from "express";

import reactionRouter from "./reaction.routes.js";
import { validate } from "../../../middlewares/validate.middleware.js";
import { deleteImageSchema, getAllImagesSchema, getImageSchema, postImageSchema } from "../validations/image.validation.js";
import { authenticate, authorize } from "../../Auth/middlewares/auth.middleware.js";
import { PostImage, deleteImage, getAllImages, getImage } from "../controllers/image.controller.js";
import { upload } from "../../../middlewares/upload.middleware.js";
const router = Router()







router.route('/').get(validate(getAllImagesSchema),getAllImages).post(upload.single('image'),validate(postImageSchema),authenticate,authorize('USER'),PostImage)


router.route('/:imageId').get(validate(getImageSchema),getImage).delete(validate(deleteImageSchema),deleteImage)

router.route('/:imageId/react',reactionRouter).get().post()





export default router
