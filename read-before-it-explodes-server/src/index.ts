import * as express from 'express'
import * as http from 'http'
import socketIOServer from './controllers/socketio-server'
import * as dotenv from 'dotenv'
import { createConnection } from "typeorm"
import 'reflect-metadata'

import { User } from "./entity/user";

(async () => {
  dotenv.config()
  const app = express()
  const server = http.createServer(app)
  socketIOServer(server)

  const dbConnection = await createConnection()

  const user = new User()
  user.username = 'testeuser'
  dbConnection.manager.save(user)

  server.listen(process.env.API_PORT || 4000, () => {
    console.log(`listening on *:${process.env.API_PORT || 4000}`)
  })
})()