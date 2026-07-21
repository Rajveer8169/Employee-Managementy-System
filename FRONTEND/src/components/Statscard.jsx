import { useEffect, useState } from "react";
import axios from "axios";
import {
  Users,
  Building2,
  UserPlus,
  IndianRupee,
} from "lucide-react";

const StatsCard = () => {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    departments: 0,
    newEmployees: 0,
    totalSalary: 0,
  });
 

  const getStats = async () => {
    try {
      const res = await axios.get(
        "https://employee-managementy-system.onrender.com/employees/dashboard"
      );

      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

   useEffect(() => {
    getStats();
  }, []);

  const cards = [
    {
      title: "Total Employees",
      value: stats.totalEmployees,
      icon: <Users size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Departments",
      value: stats.departments,
      icon: <Building2 size={28} />,
      color: "bg-green-500",
    },
    {
      title: "New This Month",
      value: stats.newEmployees,
      icon: <UserPlus size={28} />,
      color: "bg-yellow-500",
    },
    {
      title: "Total Salary",
      value: `₹${stats.totalSalary.toLocaleString()}`,
      icon: <IndianRupee size={28} />,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-10">
      {cards.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center"
        >
          <div>
            <p className="text-gray-500">{item.title}</p>
            <h2 className="text-3xl font-bold mt-2">
              {item.value}
            </h2>
          </div>

          <div className={`${item.color} text-white p-4 rounded-full`}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;