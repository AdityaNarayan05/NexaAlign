import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} /></Routes>
      <Route path='login' element={<Login/>}></Route>
    </BrowserRouter>
  )
}

export default App
