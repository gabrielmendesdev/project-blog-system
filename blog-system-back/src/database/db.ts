import { Sequelize } from 'sequelize-typescript'
import { Post } from '../models/postsModel'

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbHost = process.env.DB_HOST
const dbPassword = process.env.DB_PASSWORD

export const sequelize = new Sequelize(dbName!, dbUser!, dbPassword!, {
  dialect: 'mysql',
  host: dbHost,
  models: [Post],
  retry: {
    max: 10,
    backoffBase: 2000,
    backoffExponent: 1.5
  }
})

export default sequelize