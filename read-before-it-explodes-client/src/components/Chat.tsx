import React, { useEffect, useState, useRef } from 'react'
import { Button, Col, Input, Layout, Row, Select } from 'antd'
import { ClockCircleOutlined, SendOutlined } from '@ant-design/icons'
import { ChatProps, Message } from '../util/types'
import { v4 as uuidv4 } from 'uuid'

import './chat.css'

const Chat: React.FC<ChatProps> = ({ username, chat, socket }) => {
  const { Content, Footer } = Layout
  const { Option } = Select

  const bottomDiv = useRef<HTMLDivElement>(null)
  const messageDivs = useRef<{ [key: string]: any }>({})

  const [typeText, setTypeText] = useState('')

  const [time, setTime] = useState(5)
  const timeOptions = [3, 5, 8, 10, 15, 20, 30, 60]

  useEffect(() => {
    bottomDiv.current?.scrollIntoView()

    if (chat)
      chat.messages.map(message => {
        if (message.opened)
          setTimeout(() => {
            messageDivs.current[message.id]?.classList.add("fade-out")
          }, message.time * 1000);
      })
  }, [chat])

  const sendText = async () => {
    if (!typeText.length) return

    const message: Message = {
      id: uuidv4(),
      username,
      message: typeText,
      time: time,
      date: Date.now().toString()
    }

    socket.emit('send-message', {
      to: chat?.contact.username,
      message
    })
    setTypeText('')
    bottomDiv.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const openMessage = (message: Message) => {
    if (message.username !== username) {
      console.log(`open message with id: ${message.id}`)
      socket.emit('open-message', username, message)
    }
  }

  return (
    <Layout>
      <Content className="chat-container">
        <div className="messages-container" style={{ overflow: 'auto' }}>
          {chat ? chat.messages.map((message: Message, idx) =>
            <Row key={idx} justify={message.username === username ? 'end' : 'start'}>
              <div
                ref={el => messageDivs.current[message.id] = el}
                className={`talk-bubble tri-right btm-${message.username === username ? 'right' : 'left'}`}
                onClick={() => openMessage(message)}
              >
                <div className="talktext">
                  <p>
                    {message.message}
                  </p>
                </div>
              </div>
            </Row>
          ) : null}
          <div ref={bottomDiv} />
          {/* {JSON.stringify(messageDivs)} */}
        </div>
      </Content>
      <Footer className="footer-content">
        <Layout>
          <Row>
            <Col xs={{ span: 8 }} sm={{ span: 4 }} lg={{ span: 3 }} xxl={{ span: 2 }}>
              <Select defaultValue={time} className="select-time" onSelect={(value) => setTime(value)}>
                {
                  timeOptions.map(timeOption => (
                    <Option key={timeOption} value={timeOption}>
                      <ClockCircleOutlined /> {timeOption}s
                    </Option>
                  ))
                }
              </Select>
            </Col>
            <Col xs={{ span: 16 }} sm={{ span: 20 }} lg={{ span: 21 }} xxl={{ span: 22 }}>
              <Input placeholder="type a message   ;p"
                disabled={chat ? false : true}
                suffix={
                  <Button type="text" onClick={() => sendText()}><SendOutlined /></Button>
                }
                value={typeText}
                onChange={({ target }) => setTypeText(target.value)}
                onKeyPress={({ key }) => { if (key === 'Enter') sendText() }}
              />
            </Col>
          </Row>
        </Layout>
      </Footer>
    </Layout>
  )
}

export default Chat
