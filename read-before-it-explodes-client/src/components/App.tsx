import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import Login from './Login'
import Navbar from './Navbar'
import MainPage from './MainPage'

import 'antd/dist/antd.css'
import '../index.css'

const App = () => {
  const [username, setUsername] = useState<string>('')

  return (
    <>
      <Layout className="main-container">
        <Navbar />
        <Router>
          <Switch>
            <Route path="/login">
              {console.log('LOGIN')}
              <Login setUsername={setUsername} />
            </Route>
            <Route path="/">
              {console.log('MAINPAGE')}
              <MainPage username={username} />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </>
  )
}

export default App
