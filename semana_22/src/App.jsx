import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Catalogo from './pages/Catalogo'
import Autos from './components/Autos'
import Motos from './components/Motos'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element = {<Login></Login>} ></Route>
      <Route path='/registrarse' element = {<Register></Register>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App