import { Router } from "express";
import { validate } from "../../../middlewares/validate.middleware.js";
import { addReactionSchema, getReactionsSchema } from "../validations/reaction.validation.js";
import { addReaction, getReactions } from "../controllers/reaction.controller.js";
import { authenticate, authorize } from "../../Auth/middlewares/auth.middleware.js";

const router = Router()







router.route('/').get(validate(getReactionsSchema),getReactions).post(validate(addReactionSchema),authenticate,authorize('USER'),addReaction)








export default router
