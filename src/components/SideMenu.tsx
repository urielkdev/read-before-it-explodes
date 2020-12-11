import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { SideMenuProps } from '../types';

export const SideMenu: React.FC<SideMenuProps> = ({ setMenuItem }) => {
    const { Sider } = Layout;
    const menuItems = ['Ronald', 'Matt', 'Larissa']

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
                onClick={({ key }) => setMenuItem(menuItems[key as number])}
            >
                {
                    menuItems.map((item, index) =>
                        <Menu.Item key={index} icon={<UserOutlined />}>
                            {item}
                        </Menu.Item>
                    )
                }
            </Menu>
        </Sider>
    );
}