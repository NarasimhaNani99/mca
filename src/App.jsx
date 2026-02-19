import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home Name={"React Props"} CollegeName={"Aditya PG College"} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/items' element={<Products />} />
        <Route path='*' element={<h1> Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
