import React, { useEffect, useState, useRef } from 'react'
import { Button, Input, Layout, Row } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { ChatProps, Message } from '../types';


export const Chat: React.FC<ChatProps> = ({ contacts, selectedContactIndex }) => {

    const { Content, Footer } = Layout;
    const bottomDiv = useRef<HTMLDivElement>(null);

    const [typeText, setTypeText] = useState('');

    const sendText = async () => {
        if (!typeText.length) return

        // TODO: send the message to API
        // api.sendMessage([...chatMessages, { me: true, text: typeText, date: Date.now().toString() }])
        setTypeText('')
        bottomDiv.current?.scrollIntoView({ behavior: 'smooth' })
    }

    // TODO: change this when use the backend to retreive the messages, then scroll
    useEffect(() => {
        bottomDiv.current?.scrollIntoView()
    }, [selectedContactIndex])

    return (
        <Layout>
            <Content className="chat-container">
                <div className="messages-container" style={{ overflow: 'auto' }}>
                    {selectedContactIndex ? contacts[selectedContactIndex].messages.map((message: Message, idx) =>
                        <Row key={idx} justify={message.me ? 'end' : 'start'}>
                            <div className={`talk-bubble tri-right btm-${message.me ? 'right' : 'left'}`}>
                                <div className="talktext">
                                    <p>
                                        {message.text}
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