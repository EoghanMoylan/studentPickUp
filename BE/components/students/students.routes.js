
const express = require("express");
const router = express.Router();
const studentController = require("./students.controller");

router.get("/:id", studentController.getStudentDataByCarReg);
router.get("/", studentController.getAllStudents);


module.exports = router;