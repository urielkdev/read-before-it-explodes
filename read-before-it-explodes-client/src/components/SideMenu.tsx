import React from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { SideMenuProps } from '../util/types'

export const SideMenu: React.FC<SideMenuProps> = ({ contacts, setSelectedChatIndex }) => {
    const { Sider } = Layout

    return (
        <Sider
            breakpoint="xs"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken)
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type)
            }}
        >
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
        </Sider>
    )
}