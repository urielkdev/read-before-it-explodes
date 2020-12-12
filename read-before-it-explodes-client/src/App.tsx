import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Layout, Row } from 'antd'

import { SideMenu } from './components/SideMenu'
import { Chat } from './components/Chat';

import { Contact } from './util/types';
import { contacts as fakeContacts } from './fakeMessages';
import io from "socket.io-client";



import 'antd/dist/antd.css';
import './index.css'

const socket = io("http://localhost:4000");
socket.on('connection', () => console.log('tst2'))
socket.on('disconnect', () => console.log('tst4'))

const App = () => {
  const { Header } = Layout;

  const [username, setUsername] = useState<string>('')
  const [contacts, setContacts] = useState<Contact[]>([])
  const [selectedContactIndex, setSelectedContactIndex] = useState<number | null>(null)

  useEffect(() => {
    console.log('once')
    setContacts(fakeContacts)

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
            <Col span={8} offset={10}>
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
            contacts={contacts}
            setSelectedContactIndex={(index: number) => setSelectedContactIndex(index)}
          />
          <Chat
            contacts={contacts}
            selectedContactIndex={selectedContactIndex}
          />
        </Layout>
      </Layout>
    </>
  )
}

export default App;