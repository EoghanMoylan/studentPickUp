
const express = require("express");
const router = express.Router();
const classroomController = require("./classrooms.controller");

router.get("/", classroomController.getAllClassrooms);

module.exports = router;