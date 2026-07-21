import express from "express";
import empModel from "../models/employee.model.js";
import { getDashboardStats } from "../controller/Dashboard.stats.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const employees = await empModel.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/add", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email already exists
    const existingEmployee = await empModel.findOne({ email });

    if (existingEmployee) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    const employee = new empModel(req.body);
    const newEmployee = await employee.save();

    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});


router.get("/dashboard", getDashboardStats);


router.get("/:id", async (req, res) => {
    try {
        const employee = await empModel.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.patch("/edit/:id", async (req, res) => {
    try {
        const updatedEmployee = await empModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedEmployee = await empModel.findByIdAndDelete(req.params.id);

        if (!deletedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json({
            message: "Employee deleted successfully",
            deletedEmployee,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



export default router;