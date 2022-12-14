import Home from "./components/Home";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router >

        <Topbar />
        <Sidebar />

        <Routes>
          <Route path="/webdev" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/webdev/add-user" element={<AddUser />} />
        </Routes>

        <Routes>
          <Route path="/webdev/users" element={<Users />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App;
