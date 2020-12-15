import React from 'react'
import { Layout } from 'antd'

import './navbar.css'

const Navbar: React.FC = () => {
  const { Header } = Layout

  return (
    <Header className="nav-bar">
      READ BEFORE IT EXPLODES
    </Header>
  )
}
export default Navbar
