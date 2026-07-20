import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Navbar";
import DashboardNav from "./components/DashboardNav";
import Employees from "./components/Employee";
import AddEmployee from "./components/AddEmploee";
import EditEmployee from "./components/EditEmployee";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Navigate } from "react-router-dom";

function App() {
  const user = localStorage.getItem("user");

  const location = useLocation();


  const hideSidebar =
    location.pathname === "/" || location.pathname === "/login" || !user;

  return (
    <div className="flex">
      {!hideSidebar && <Sidebar />}

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={user ? <DashboardNav /> : <Navigate to="/login" />}
          />
          <Route
            path="/employee"
            element={user ? <Employees /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-employee"
            element={user ? <AddEmployee /> : <Navigate to="/login" />}
          />
          <Route
            path="/edit-employee/:id"
            element={user ? <EditEmployee /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
