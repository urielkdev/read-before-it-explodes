import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'

import { SideMenu } from './components/SideMenu'
import { Chat } from './components/Chat';

import { Contact } from './types';
import { contacts as fakeContacts } from './fakeMessages';


import 'antd/dist/antd.css';
import './index.css'

const App = () => {
  const { Header } = Layout;

  const [contacts, setContacts] = useState<Contact[]>([])
  const [selectedContactIndex, setSelectedContactIndex] = useState<number | null>(null)

  useEffect(() => {
    setContacts(fakeContacts)
  }, [])

  return (
    <>
      <Layout className="main-container">
        <Header className="nav-bar">
          READ BEFORE IT EXPLODES
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