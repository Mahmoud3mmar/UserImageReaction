import express from 'express'
import dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary';

import  ConnectToDb  from './db/connection.js'
import  {bootstrap}  from './bootstrap.js'

dotenv.config()

const app = express()
const port = 3000

          
cloudinary.config({ 
  cloud_name: 'dhdkmq1q8', 
  api_key: '739591961255271', 
  api_secret: '***************************' 
});

ConnectToDb()
bootstrap(app)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))