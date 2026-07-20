import empModel from "../models/employee.model.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalEmployees = await empModel.countDocuments();

    const departments = await empModel.distinct("department");

    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const newEmployees = await empModel.countDocuments({
      createdAt: { $gte: startOfMonth },
    });

    const salary = await empModel.aggregate([
      {
        $group: {
          _id: null,
          totalSalary: { $sum: "$salary" },
        },
      },
    ]);

    res.json({
      totalEmployees,
      departments: departments.length,
      newEmployees,
      totalSalary: salary[0]?.totalSalary || 0,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};