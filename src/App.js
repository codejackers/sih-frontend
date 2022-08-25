import "./App.css";
import HomePage from "./Components/UserFacing/HomePage";
import Login from "./Components/hei/Login";
import DashBoard from "./Components/DashBoard/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/UserFacing/utils/About";
import Report from "./Components/Report/report";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/report" element={<Report />} />
          <Route path="/hei/Login" element={<Login />} />
          <Route path="/college/:id" element={<DashBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
