
const express = require("express");
const router = express.Router();
const studentController = require("./students.controller");

router.get("/:id", studentController.getStudentDataByCarReg);
router.get("/", studentController.getAllStudents);
router.patch("/", studentController.updateStudent);


module.exports = router;