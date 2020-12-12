import React, { useState } from 'react'
import { Layout } from 'antd'

import { SideMenu } from './components/SideMenu'
import { Chat } from './components/Chat';


import 'antd/dist/antd.css';
import './index.css'

const App = () => {
  const { Header } = Layout;


  const [menuItem, setMenuItem] = useState<string | null>(null)

  return (
    <>
      <Layout className="main-container">
        <Header className="nav-bar">
          READ BEFORE IT EXPLODES
        </Header>

        <Layout>
          <SideMenu setMenuItem={(menuItem: string) => setMenuItem(menuItem)} />
          <Chat menuItem={menuItem} />
        </Layout>
      </Layout>
    </>
  )
  // return (
  //   <div className='app'>
  //     <Row justify="center" className='main-container'>
  //       <Col xs={{ span: 0, }} md={{ span: 5 }} className='side-menu'>
  //         <Menu
  //           style={{}}
  //           defaultSelectedKeys={['1']}
  //           defaultOpenKeys={['sub1']}
  //           mode="inline"
  //         >
  //           <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
  //             <Menu.ItemGroup key="g1" title="Item 1">
  //               <Menu.Item key="1">Option 1</Menu.Item>
  //               <Menu.Item key="2">Option 2</Menu.Item>
  //             </Menu.ItemGroup>
  //             <Menu.ItemGroup key="g2" title="Item 2">
  //               <Menu.Item key="3">Option 3</Menu.Item>
  //               <Menu.Item key="4">Option 4</Menu.Item>
  //             </Menu.ItemGroup>
  //           </SubMenu>
  //           <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
  //             <Menu.Item key="5">Option 5</Menu.Item>
  //             <Menu.Item key="6">Option 6</Menu.Item>
  //             <SubMenu key="sub3" title="Submenu">
  //               <Menu.Item key="7">Option 7</Menu.Item>
  //               <Menu.Item key="8">Option 8</Menu.Item>
  //             </SubMenu>
  //           </SubMenu>
  //           <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
  //             <Menu.Item key="9">Option 9</Menu.Item>
  //             <Menu.Item key="10">Option 10</Menu.Item>
  //             <Menu.Item key="11">Option 11</Menu.Item>
  //             <Menu.Item key="12">Option 12</Menu.Item>
  //           </SubMenu>
  //         </Menu>
  //       </Col>
  //       <Col xs={{ span: 23 }} md={{ span: 17 }} className='chat-container'>
  //         aaa
  //       </Col>

  //     </Row>
  //   </div >
  // );
}

export default App;