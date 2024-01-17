
import express from 'express'
import fs,{dirname} from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

export const __dirname=dirname(fileURLToPath(import.meta.url))

import { AppError } from './src/utils/error.handler.js'
import authRouter from './src/modules/Auth/routes/auth.routes.js'
import imageRouter from './src/modules/image/routers/image.routes.js'


export const bootstrap = (app) => {
	app.use(express.json())

	app.use('/auth', authRouter)
	app.use('/images', imageRouter)

	app.all('*', (req, res) => {
		throw new AppError("This route doesn't exist", 404)
	})

	app.use((error, req, res, next) => {
		const { message, status, stack } = error
		if(req.file)
			fs.unlinkSync(path.join(__dirname,'uploads',req.file.filename))
		res.status(status || 500).json({ message, stack })
	})
}