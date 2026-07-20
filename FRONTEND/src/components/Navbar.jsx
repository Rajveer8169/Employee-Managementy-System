import { LayoutDashboard, Users, UserPlus, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside className=" bg-slate-900 text-white h-screen">
      <div className="w-55">
        <div className="text-2xl font-bold p-6 border-b border-slate-700">
          EMS
        </div>

        <nav className="mt-5 space-y-2 ">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-500"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/employee"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-500"
          >
            <Users size={20} />
            Employee
          </Link>

          <Link
            to="/add-employee"
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-500"
          >
            <UserPlus size={20} />
            Add Employee
          </Link>

          <a className="flex items-center gap-3 px-6 py-3 hover:bg-blue-500">
            <User size={20} />
            Profile
          </a>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 hover:bg-blue-500 w-full"
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
