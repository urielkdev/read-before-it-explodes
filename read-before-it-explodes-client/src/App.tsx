import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Layout, Row } from 'antd'

import { SideMenu } from './components/SideMenu'
import { Chat as ChatComponent } from './components/Chat';

import { Chat } from './util/types';
import { chats as fakeChats } from './util/fakeMessages';
import io from "socket.io-client";



import 'antd/dist/antd.css';
import './index.css'

const socket = io("http://localhost:4000");
socket.on('connection', () => console.log('tst2'))
socket.on('disconnect', () => console.log('tst4'))
socket.on('hi', () => console.log('hi'))

const App = () => {
  const { Header } = Layout;

  const [username, setUsername] = useState<string>('')
  const [chats, setChats] = useState<Chat[]>([])
  const [selectedChatIndex, setSelectedChatIndex] = useState<number | null>(null)

  useEffect(() => {
    console.log('once')
    setChats(fakeChats)

  }, [])

  const sendUsernameToSocket = () => {
    if (!username.length) return
    socket.emit('set-username', username)
  }


  return (
    <>
      <Layout className="main-container">
        <Header className="nav-bar">
          <Row>
            <Col span={6}>
              READ BEFORE IT EXPLODES {username}
            </Col>
            <Col span={4} offset={14}>
              <Input
                placeholder="username"
                suffix={<Button onClick={sendUsernameToSocket}>OK</Button>}
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                onKeyPress={({ key }) => { if (key === 'Enter') sendUsernameToSocket() }}
              />
            </Col>
          </Row>
        </Header>

        <Layout>
          <SideMenu
            contacts={chats.map(({ contact }) => contact)}
            setSelectedContactIndex={(index: number) => setSelectedChatIndex(index)}
          />
          <ChatComponent
            chat={selectedChatIndex ? chats[selectedChatIndex] : null}
            username={username}
            socket={socket}
          />
        </Layout>
      </Layout>
    </>
  )
}

export default App;