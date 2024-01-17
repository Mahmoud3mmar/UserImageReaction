import { Router } from "express";
import { validate } from "../../../middlewares/validate.middleware.js";
import { getAllImagesSchema } from "../../image/validations/image.validation.js";
import { authenticate, authorize } from "../../Auth/middlewares/auth.middleware.js";
import { getAllUsers } from "../controllers/user.controller.js";


const router = Router()







router.route('/').get(validate(getAllImagesSchema),authenticate,authorize('ADMIN'),getAllUsers)





export default router
