import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"

export const AllRoutes=()=>{
return  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/login"  element={<h1>Login Page</h1>}/>
</Routes>
}