import React, { useEffect, useState, useRef } from 'react'
import { Button, Input, Layout, Row } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { ChatProps, Message } from '../util/types';


export const Chat: React.FC<ChatProps> = ({ username, chat, socket }) => {

    const { Content, Footer } = Layout;
    const bottomDiv = useRef<HTMLDivElement>(null);

    const [typeText, setTypeText] = useState('');

    // TODO: change this when use the backend to retreive the messages, then scroll
    useEffect(() => {
        bottomDiv.current?.scrollIntoView()
    }, [chat])

    const sendText = async () => {
        if (!typeText.length) return

        // TODO: send the message to API
        // api.sendMessage([...chatMessages, { me: true, text: typeText, date: Date.now().toString() }])
        socket.emit('send-message', { to: chat?.contact.username, message: typeText })
        setTypeText('')
        bottomDiv.current?.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <Layout>
            <Content className="chat-container">
                <div className="messages-container" style={{ overflow: 'auto' }}>
                    {chat ? chat.messages.map((message: Message, idx) =>
                        <Row key={idx} justify={message.username === username ? 'end' : 'start'}>
                            <div className={`talk-bubble tri-right btm-${message.username === username ? 'right' : 'left'}`}>
                                <div className="talktext">
                                    <p>
                                        {message.message}
                                    </p>
                                </div>
                            </div>
                        </Row>
                    ) : null}
                    <div ref={bottomDiv} />
                </div>
            </Content>
            <Footer className="type-container">
                <Input placeholder="input search text"
                    suffix={
                        <Button type="text" onClick={() => sendText()}><SendOutlined /></Button>
                    }
                    value={typeText}
                    onChange={({ target }) => setTypeText(target.value)}
                    onKeyPress={({ key }) => { if (key === 'Enter') sendText() }}
                />
            </Footer>
        </Layout>
    );
}