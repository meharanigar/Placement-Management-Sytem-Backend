import express from  "express";
import {
     getStudents,
    getStudentsById, 
    addStudent,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";


//roter object 
const router = express.Router();

// router.get("/",getStudents);
router.get("/",getStudents);

//getstudents by id
router.get("/:id",getStudentsById)

//POST adding a student

router.post("/",addStudent);

//PUT updating a student
router.put("/:id",updateStudent);

//Delete the students
router.delete("/",deleteStudent)

export default router;