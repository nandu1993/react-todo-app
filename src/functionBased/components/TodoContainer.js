import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Home from "../pages/Home"
import Navbar from "./Navbar"

const TodoContainer = () => {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotMatch />} />
            </Routes>
        </>
    )
}

export default TodoContainer