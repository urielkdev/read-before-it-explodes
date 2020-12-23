import 'reflect-metadata'
import * as express from 'express'
import * as http from 'http'
import socketIOServer from './controllers/socketio-server'
import * as dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createConnection } from "typeorm"

import { UserResolver } from './resolvers/UserResolver'

(async () => {
  dotenv.config()
  const app = express()
  const server = http.createServer(app)
  socketIOServer(server)

  await createConnection()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver]
    }),
    context: ({ req, res }) => ({ req, res })
  })

  apolloServer.applyMiddleware({ app, cors: false })

  server.listen(process.env.API_PORT || 4000, () => {
    console.log(`listening on *:${process.env.API_PORT || 4000}`)
  })
})()