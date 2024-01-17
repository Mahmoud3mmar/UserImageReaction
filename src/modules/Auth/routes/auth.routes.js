import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller.js";
import { assertUniqueEmail } from "../middlewares/auth.middleware.js";
import { validate } from "../../../middlewares/validate.middleware.js";
import { signinSchema, signupSchema } from "../middlewares/auth.validate.js";

const router=Router()

router.post('/signin',validate(signinSchema),signin)
router.post('/signup',validate(signupSchema),assertUniqueEmail,signup)


export default router