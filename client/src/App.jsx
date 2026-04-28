import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
function App() {

  const { token } = useContext(AppContext)

  return (
    <div>
      <Routes>
        <Route path='/'
          element={token ? <Home /> : <Navigate to= '/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
