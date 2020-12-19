import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import Navbar from './Navbar'
import MainPage from './MainPage'

import 'antd/dist/antd.css'
import './app.css'

const App = () => {
  const [username, setUsername] = useState<string>('')

  return (
    <>
      <Layout className="main-container">
        <Navbar />
        <Router>
          <Switch>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/login">
              <LoginPage setUsername={setUsername} />
            </Route>
            <Route path="/">
              <MainPage username={username} setUsername={setUsername} />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </>
  )
}

export default App
