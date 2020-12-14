import * as express from 'express'
import * as http from 'http'
import socketIOServer from './controllers/socketio-server'


const app = express()

const server = http.createServer(app)
socketIOServer(server)


server.listen(4000, () => {
    console.log('listening on *:4000')
})