import express from "express";

import {
  getStudents,
  getStudentsById,
  addStudent,
  updateStudent,
  deleteStudent,
  searchStudents,
} from "../controllers/studentController.js";

const router = express.Router();

// Search Students (Keep this BEFORE "/:id")
router.get("/search", searchStudents);

// Get All Students
router.get("/", getStudents);

// Get Student By ID
router.get("/:id", getStudentsById);

// Add Student
router.post("/", addStudent);

// Update Student
router.put("/:id", updateStudent);

// Delete Student
router.delete("/:id", deleteStudent);

export default router;