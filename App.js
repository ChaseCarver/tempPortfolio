import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Todolist from "./pages/todolist";



function Nav(){
  return(
    <nav className="absolute flex items-center justify-center w-full bg-slate-100">
        <ul className="flex items-center justify-center">
          <li className="btn">
            <Link to="/" className="">Home</Link>
          </li>
          <li className="btn">
            <Link to="/todolist">To-do list</Link>
          </li>
          <li className="btn">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
  )
}

function App() {
  return (
    <>
      {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  );
}

export default App;