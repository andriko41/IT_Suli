import express from 'express'
import { createUser} from './data/userdb.js'
import { createCategory} from './data/categorydb.js'
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

const app = express()

const port = 3000

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/users', userRouter)

app.use('/login', authRouter)

app.use('/category', categoryRouter)

app.use('/article', articleRouter)

app.use('/coments', comentsRouter)

app.use('/favs', favsRouter)





app.listen(port, () => {
  console.log(`A buzi szerver fut a http://localhost:${port} cimen`)
    createUser(),
    createCategory(),
    createCikkek(),
    createHozzaszolasok(),
    createKedvencek()
})
