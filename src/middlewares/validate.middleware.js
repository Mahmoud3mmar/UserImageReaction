import { AppError } from "../utils/error.handler.js"


export const validate = (schema) => {
	return (req, res, next) => {
		const {body,params,query}=req
		const { error } = schema.validate(
			{	body,
				params,
				query,
				...(req.file &&{file:req.file}),
				...(req.files &&{files:req.files})
			},
			{abortEarly: false })

		if (error) {
			throw new AppError(error.details.map((d) => d.message),400)
		}
		next()
	}
}
