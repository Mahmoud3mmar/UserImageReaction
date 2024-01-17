import jwt from "jsonwebtoken"
import { AppError, catchAsyncError } from "../../../utils/error.handler.js"
import UserModel from "../../User/user.model.js"
 const authenticate = (req, res, next) => {
	const token = req.header('token')
	if (!token) throw new AppError('Unauthorized', 401)
	try {
		const decoded = jwt.verify(token, process.env.SECRET)
		req.user = decoded
		next()
	} catch (error) {
		throw new AppError(error.message, 498)
	}
}

 const authorize = (role) => {
	return (req, res, next) => {
		if (role !== req.user.role) throw new AppError('Forbidden', 403)
		next()
	}
}

 const assertUniqueEmail = catchAsyncError(async (req, res, next) => {
	const { email } = req.body
	const user = await UserModel.findOne({ email })
	if (user) throw new AppError('This email is already taken1', 400)
	next()
})


export{

    authenticate,
    authorize,
    assertUniqueEmail
}