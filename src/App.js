import "./App.css";
<<<<<<< Updated upstream
import HomePage from "./Components/UserFacing/HomePage";
import Login from "./Components/hei/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

=======
import Login from "./components/hei/Login";
import Registration from "./components/Registration/Registration";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import React from 'react'
import HomePage from "./components/UserFacing/HomePage";
import About from "./components/about/utils/About";
import Otp from "./components/hei/utils/Otp";



>>>>>>> Stashed changes
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
          <Route path="/hei/Login" element={<Login />} />
          <Route path="/hei/utils/Otp" element={<Otp/>}/> 
          <Route path="/about" element={<About />} />

        </Routes>

        
      </div>
<<<<<<< Updated upstream
=======
      
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;
