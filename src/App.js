import "./App.css";
import HomePage from "./Components/UserFacing/HomePage";
import Login from "./Components/hei/Login";
import EditDetails from "./Components/DashBoard/utils/EditDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/EditDetails" element={<EditDetails open={true}/>} />

          <Route path="/hei/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
