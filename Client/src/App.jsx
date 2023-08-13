import React, { Profiler } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Employee from "./Employee"
import Home from "./Home"
import Profile from "./Profile"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
      </Route>
      <Route path='login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
