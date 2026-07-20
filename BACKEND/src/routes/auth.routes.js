import express from "express";
import User from "../models/user.model.js";

const router = express.Router();


router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User({
      email,
      password,
    });

    const newUser = await user.save()

    res.status(201).json({
      message: "User Registered Successfully",
      newUser,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or Password",
      });
    }

    res.status(200).json({
      message: "Login Successful",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

export default router;