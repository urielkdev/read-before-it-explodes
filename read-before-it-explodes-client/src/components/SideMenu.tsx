import React from 'react'
import { SideMenuProps } from '../util/types'
import { Button, Layout, Menu } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'

import './side-menu.css'

const SideMenu: React.FC<SideMenuProps> = ({ contacts, setSelectedChatIndex }) => {
  const { Content, Footer, Sider } = Layout

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
          <Button block icon={<LogoutOutlined />}>
            Logout
            </Button>
        </Footer>
      </Layout>
    </Sider>
  )
}
export default SideMenu
