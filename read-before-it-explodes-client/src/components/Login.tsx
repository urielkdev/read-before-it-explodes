import React from 'react'
import { LoginProps } from '../util/types'
import { useHistory } from 'react-router-dom'


const Login: React.FC<LoginProps> = ({ setUsername }) => {


  let history = useHistory()
  const navigateToMainPage = async () => {
    history.replace("/")
  }

  return (
    <div>
      <button onClick={navigateToMainPage}>navigateToMainPage</button>
    </div>
  )
}

export default Login
