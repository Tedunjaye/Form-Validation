// import { useState } from 'react'
import './App.css'
import { Form } from "./pages/Form"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from './pages/Login'
import { Main } from "./pages/Main"

function App() {

  return (
      <div className="App">
        
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/form' element={<Form />} />
            <Route path='*' element={<Main />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
