import { Chat, SocketSendMessage } from '../util/types'
import { chats as fakeChats } from '../util/fakeChats'

const socketIOServer = (server: any) => {

    const io: SocketIO.Server = require('socket.io')(server)

    let sockets: { [key: string]: SocketIO.Socket } = {}

    let chatsUsers: { [key: string]: Chat[] } = fakeChats


    const emitChats = (socket: SocketIO.Socket, chats: Chat[]) => {
        socket?.emit('receive-chats', chats)
    }

    io.on('connection', (socket) => {
        console.log('a user connsd')

        socket.on('disconnect', () => {
            // delete this socket of `sockets`
            console.log('user disconnected')

        })

        socket.on('set-username', (username) => {
            console.log(`set-username: ${username}`)
            sockets[username] = socket

            // this is just an example, actually it have to get the data in the db I guess, think about this later on
            emitChats(socket, chatsUsers[username] || [])
        })

        socket.on('send-message', ({ to, message }: SocketSendMessage) => {
            if (!to) return console.error(`send-message: undefined 'to'`)

            console.log(`send-message: ${message.username} to ${to} at ${message.date}: ${message.message}`)

            chatsUsers[message.username] = chatsUsers[message.username].map(chats => {
                return chats.contact.username === to ?
                    { contact: chats.contact, messages: [...chats.messages, message] } : chats
            })

            chatsUsers[to] = chatsUsers[to].map(chats => {
                return chats.contact.username === message.username ?
                    { contact: chats.contact, messages: [...chats.messages, message] } : chats
            })

            emitChats(socket, chatsUsers[message.username])
            emitChats(sockets[to], chatsUsers[to])
        })
    })
}

export default socketIOServer