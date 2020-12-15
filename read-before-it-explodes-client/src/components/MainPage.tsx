import React, { useEffect, useState } from 'react'
import { Chat, MainPageProps } from '../util/types'
import { Layout } from 'antd'
import io from 'socket.io-client'
import { useHistory } from 'react-router-dom'

import SideMenu from './SideMenu'
import ChatComponent from './Chat'

const socket = io('localhost:4000')

const MainPage: React.FC<MainPageProps> = ({ username, setUsername }) => {
  const [chats, setChats] = useState<Chat[]>([])
  const [selectedChatIndex, setSelectedChatIndex] = useState<number | null>(null)

  let history = useHistory()

  useEffect(() => {
    socket.on('connect', () => console.log('socket connect'))
    socket.on('disconnect', () => console.log('socket disconnect'))
    socket.on('receive-chats', (receivedChats: Chat[]) => {
      console.log(`receive-chats`)
      console.log(receivedChats)
      setChats(receivedChats)
    })

    const storedUsername = localStorage.getItem('username')
    console.log('storedUsername: ', storedUsername)
    if (storedUsername) {
      setUsername(storedUsername)
      socket.emit('set-username', 'uriel')
    } else history.replace("/login")
  }, [])

  return (
    <Layout>
      <SideMenu
        contacts={chats.map(({ contact }) => contact)}
        setSelectedChatIndex={(index: number) => setSelectedChatIndex(index)}
      />
      <ChatComponent
        chat={selectedChatIndex ? chats[selectedChatIndex] : null}
        username={username}
        socket={socket}
      />
    </Layout>
  )
}

export default MainPage
