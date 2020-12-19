import React from 'react'
import { RegisterForm, RegisterProps } from '../util/types'
import { useHistory } from 'react-router-dom'
import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd'

import './register-page.css'

// TODO: refactor to be a register page
const RegisterPage: React.FC<RegisterProps> = ({ }) => {
  let history = useHistory()

  const onFinish = async ({ username }: RegisterForm) => {
    localStorage.setItem('username', username)
    history.replace("/")
  }

  const onFinishFailed = () => {
    console.log('Failed:')
  }

  return (
    <Row justify="center" className="full-height">
      <Col xs={{ span: 22 }} md={{ span: 10 }} xl={{ span: 6 }} xxl={{ span: 5 }} className="col">
        <Card title="REGISTER" className="card">
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

            <Form.Item
              label="Confirm password"
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

export default RegisterPage
