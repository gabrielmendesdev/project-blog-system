import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import postRouter from './routers/postRouter'
import sequelize from './database/db'
import { handleErrorMiddleware } from './middlewares/handleError'

const app = express()
sequelize.authenticate()

app.use(morgan('tiny'))
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/api/posts', postRouter)

app.use(handleErrorMiddleware)

export default app
