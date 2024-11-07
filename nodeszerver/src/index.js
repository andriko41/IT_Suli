import express from 'express'
import { createUser } from './data/userdb.js'
import { createCategory } from './data/categorydb.js'
import { createCikkek } from './data/articledb.js'
import { createHozzaszolasok } from './data/comentsdb.js'
import { createKedvencek } from './data/favdb.js'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { userRouter } from './routes/user.js'
import { categoryRouter } from './routes/category.js'
import { articleRouter } from './routes/article.js'
import { comentsRouter } from './routes/coments.js'
import { favsRouter } from './routes/fav.js'
import { authRouter } from './routes/auth.js'
import cors from 'cors'
const server = express()

const port = 3000

server.use(cors())
server.use(bodyParser.json())
server.use(morgan('dev'))

server.use('/users', userRouter)

server.use('/login', authRouter)

server.use('/category', categoryRouter)

server.use('/article', articleRouter)

server.use('/coments', comentsRouter)

server.use('/favs', favsRouter)

server.listen(port, () => {
  console.log(`A buzi szerver fut a http://localhost:${port} cimen`)
  createUser(),
    createCategory(),
    createCikkek(),
    createHozzaszolasok(),
    createKedvencek()
})
