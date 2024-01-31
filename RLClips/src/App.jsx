import { useState } from 'react'
import { Route, Routes} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<LoginPage />}  />
          <Route path='/register' element={<RegisterPage />}  />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
