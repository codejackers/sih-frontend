import "./App.css";
import HomePage from "./Components/UserFacing/HomePage";
import Login from "./Components/hei/Login";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          

          <Route path="/hei/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
