import React, { useState } from 'react'
import { Button, Input, Layout } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { ChatProps, Message } from '../types';


export const Chat: React.FC<ChatProps> = ({ menuItem }) => {
    const { Content, Footer } = Layout;
    const buttonSend = <Button type="text" onClick={() => sendText()}><SendOutlined /></Button>;
    const [typeText, setTypeText] = useState('');
    const testMessages = [
        { me: false, text: 'hello uriel, whats up' },
        { me: true, text: 'hi' },
        { me: false, text: 'how old are you?' },
        { me: false, text: 'are you there?' },
        { me: false, text: 'hello?' },
    ]
    const [chatMessages, setChatMessages] = useState<Message[]>(testMessages);

    const sendText = () => {
        setChatMessages([...chatMessages, { me: true, text: typeText }])
        setTypeText('')
    }

    return (
        <Layout>
            <Content className="chat-container">
                <div className="messages-container">
                    content {menuItem}
                    <br />
                    {chatMessages.map((message: Message, idx) =>
                        <p key={idx} className={message.me ? 'my-message' : 'not-my-message'}>
                            {message.text}
                        </p>
                    )}
                    <br />
                    <br />
                    <br />

                    {typeText}

                </div>
            </Content>
            <Footer className="type-container">
                <Input placeholder="input search text"
                    suffix={buttonSend}
                    value={typeText}
                    onChange={({ target }) => setTypeText(target.value)}
                    onKeyPress={({ key }) => { if (key === 'Enter') sendText() }}
                />
            </Footer>
        </Layout>
    );
}