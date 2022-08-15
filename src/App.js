import "./App.css";

import HomePage from "./components/UserFacing/HomePage";
import Login from "./components/hei/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import React from "react";

import About from "./components/about/utils/About";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/hei/Login" element={<Login />} />
          
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
