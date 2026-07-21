import { useState } from "react";
import axios from "axios";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    salary: "",
    joinDate: "",
    image: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://employee-managementy-system.onrender.com/employees/add",
        employee
      );

      alert("Employee Added Successfully");
      console.log(res.data);

      setEmployee({
        name: "",
        email: "",
        phone: "",
        position: "",
        department: "",
        salary: "",
        joinDate: "",
        image: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed to add employee");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex w-full">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold mb-6">Add Employee</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
              required
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={employee.position}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label>Join Date</label>
            <input
              type="date"
              name="joinDate"
              value={employee.joinDate}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={employee.image}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;