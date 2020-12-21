import * as express from 'express'
import * as http from 'http'
import socketIOServer from './controllers/socketio-server'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()
const server = http.createServer(app)
socketIOServer(server)

server.listen(process.env.API_PORT || 4000, () => {
  console.log(`listening on *:${process.env.API_PORT || 4000}`)
})