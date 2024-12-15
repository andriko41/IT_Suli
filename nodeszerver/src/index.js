import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'

import { createUser } from './data/userdb.js'
import { createPoi } from './data/poidb.js'
import { createRace } from './data/racedb.js'
import { createCities } from './data/citiesdb.js'

import { userRouter } from './routes/user.js'
import { poiRouter } from './routes/poi.js'
import { raceRouter } from './routes/race.js'
import { citiesRouter } from './routes/cities.js'
import { authRouter } from './routes/auth.js'

const server = express()

const port = 3000

server.use(cors())
server.use(bodyParser.json())
server.use(morgan('dev'))

server.use('/users', userRouter)

server.use('/login', authRouter)

server.use('/poi', poiRouter)

server.use('/races', raceRouter)

server.use('/cities', citiesRouter)

server.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port} cimen`)
  createUser(), createRace(), createCities(), createPoi()
})
