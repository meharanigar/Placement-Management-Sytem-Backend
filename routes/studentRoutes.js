import express from "express";

import {
  getStudents,
  getStudentsById,
  addStudent,
  updateStudent,
  deleteStudent,
  searchStudents,
  
} from "../controllers/studentController.js";

import upload from "../middleware/upload.js";

const router = express.Router();

// Search Students
router.get("/search", searchStudents);

// Get All Students
router.get("/", getStudents);

// Get Student By ID
router.get("/:id", getStudentsById);

// Add Student with Image Upload
router.post(
  "/",
  upload.single("image"),
  addStudent
);

// Update Student
router.put("/:id", updateStudent);

// Delete Student
router.delete("/:id", deleteStudent);

export default router;