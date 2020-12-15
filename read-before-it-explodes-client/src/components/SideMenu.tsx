import React from 'react'
import { SideMenuProps } from '../util/types'
import { Button, Layout, Menu } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

import './side-menu.css'

const SideMenu: React.FC<SideMenuProps> = ({ contacts, setSelectedChatIndex, setUsername }) => {
  const { Content, Footer, Sider } = Layout
  const history = useHistory()

  const logout = () => {
    setUsername('')
    localStorage.setItem('username', '')
    history.replace('/login')
  }

  return (
    <Sider
      breakpoint="md"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <Layout className="layout-content">
        <Content className="menu-container">
          <Menu
            theme="dark" mode="inline"
            defaultSelectedKeys={[]}
            onClick={({ key }) => setSelectedChatIndex(key as number)}
          >
            {
              contacts.map((contact, index) =>
                <Menu.Item key={index} icon={<UserOutlined />}>
                  {contact.username}
                </Menu.Item>
              )
            }
          </Menu>
        </Content>
        <Footer className="footer">
          <Button block icon={<LogoutOutlined />} onClick={logout}>
            Logout
            </Button>
        </Footer>
      </Layout>
    </Sider>
  )
}
export default SideMenu
