import React, { useEffect, useState, useRef } from 'react'
import { Button, Input, Layout, Row } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { ChatProps, Message } from '../types';


export const Chat: React.FC<ChatProps> = ({ menuItem }) => {
    const { Content, Footer } = Layout;
    const inputEl = useRef<HTMLDivElement>(null);

    const testMessages = [
        { me: false, text: 'hello uriel, whats up' },
        { me: true, text: 'hi' },
        { me: false, text: 'how old are you?' },
        { me: false, text: 'are you there?' },
        { me: false, text: 'hello?' },
        { me: true, text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown' },
        { me: false, text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of clas' },
        { me: false, text: 'It is a long established fact that a reader will be distracted by the readable' },
        { me: true, text: 'There are many variations of passages of Lorem' },
    ]

    const [typeText, setTypeText] = useState('');
    const [chatMessages, setChatMessages] = useState<Message[]>(testMessages);

    const sendText = async () => {
        if (!typeText.length) return

        await setChatMessages([...chatMessages, { me: true, text: typeText }])
        setTypeText('')
        inputEl.current?.scrollIntoView({ behavior: 'smooth' })
    }

    // TODO: change this when use the backend to retreive the messages, then scroll
    useEffect(() => {
        inputEl.current?.scrollIntoView()
    }, [])

    return (
        <Layout>
            <Content className="chat-container">
                <div className="messages-container" style={{ overflow: 'auto' }}>
                    {chatMessages.map((message: Message, idx) =>
                        <Row justify={message.me ? 'end' : 'start'}>
                            <div key={idx} className={`talk-bubble tri-right btm-${message.me ? 'right' : 'left'}`}>
                                <div className="talktext">
                                    <p>
                                        {message.text}
                                    </p>
                                </div>
                            </div>
                        </Row>
                    )}
                    <div ref={inputEl} />
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