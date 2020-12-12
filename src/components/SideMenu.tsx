import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { SideMenuProps } from '../types';

export const SideMenu: React.FC<SideMenuProps> = ({ contacts, setSelectedContactIndex }) => {
    const { Sider } = Layout;

    useEffect(() => setSelectedContactIndex(0), [])
    return (
        <Sider
            breakpoint="xs"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Menu
                theme="dark" mode="inline"
                defaultSelectedKeys={[]}
                onClick={({ key }) => setSelectedContactIndex(key as number)}
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
    );
}