import express from 'express'
import { createUser,  createCategory } from './db.js'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { userRouter } from './routes/user.js'
import { categoryRouter } from './routes/category.js'

const app = express()

const port = 3000

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/users', userRouter)

app.use('/category', categoryRouter)




app.listen(port, () => {
  console.log(`A buzi szerver fut a http://localhost:${port} cimen`)
    createUser(),
    createCategory()
    //addCategory()
   // addUsers()
})
