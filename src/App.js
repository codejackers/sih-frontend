import "./App.css";
import HomePage from "./Components/UserFacing/HomePage";
import Login from "./Components/hei/Login";
import Registration from "./Components/Registration/Registration";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <div className="Login">
        <Routes>
          <Route path="/hei/Login" element={<Login />} />
        </Routes>
      </div>
      <div className="Registration">
        <Routes>
          <Route path="/Registration/Registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
