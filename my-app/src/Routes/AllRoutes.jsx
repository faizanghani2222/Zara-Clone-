import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./Login"
import { Test } from "./test"

export const AllRoutes=()=>{
return  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/test"  element={<Test/>}/>
</Routes>
}