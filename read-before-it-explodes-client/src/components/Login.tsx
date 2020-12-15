import React from 'react'
import { LoginForm, LoginProps } from '../util/types'
import { useHistory } from 'react-router-dom'
import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd'

import './login.css'

const Login: React.FC<LoginProps> = ({ setUsername }) => {
  let history = useHistory()

  const onFinish = async ({ username }: LoginForm) => {
    setUsername(username)
    localStorage.setItem('username', username)
    history.replace("/")
  }

  const onFinishFailed = () => {
    console.log('Failed:')
  }

  return (
    <Row justify="center" className="full-height">
      <Col xs={{ span: 22 }} md={{ span: 10 }} xl={{ span: 6 }} xxl={{ span: 5 }} className="col">
        <Card title="LOGIN" className="card">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row >
  )
}

export default Login
