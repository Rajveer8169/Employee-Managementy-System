import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:3000/employees");
      setEmployees(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteEmployee = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/employees/delete/${id}`);

      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  if (loading) {
    return <h2 className="p-6 text-xl">Loading...</h2>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Employees</h1>

        <Link
          to="/add-employee"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Add Employee
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search employee..."
        className="border rounded-lg px-4 py-2 w-80 mb-6 outline-none"
      />

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Salary</th>
              <th className="p-4 text-left">Joined</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id} className="border-b hover:bg-gray-50">
                <td className="p-4">{emp.name}</td>
                <td className="p-4">{emp.email}</td>
                <td className="p-4">{emp.department}</td>
                <td className="p-4">₹{emp.salary}</td>
                <td className="p-4">
                  {new Date(emp.createdAt).toLocaleDateString()}
                </td>

                <td className="p-4 flex justify-center gap-3">
                  <Link
                    to={`/edit-employee/${emp._id}`}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteEmployee(emp._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;