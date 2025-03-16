import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './components/UserInfo'
import UesrInfoEffect from './components/UesrInfoEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserInfo/> */}
      {/* <User/> */}
      <UesrInfoEffect/>
    </>
  )
}

export default App
