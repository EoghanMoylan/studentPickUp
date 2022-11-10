'use strict';
const Student = require("../students/students.model");
const CarReg = require("../carregs/carregs.model");
const Classroom = require("../classrooms/classrooms.model");

const initStudentJson = require('../../students.json');
const initCarRegJson = require('../../carregs.json');
const initClassroomsJson = require('../../classrooms.json');

exports.resetData = async (req, res) => {
    //quick and dirty just to initially populate and then in turn reset the DB with default values;
    await Student.Student.bulkCreate(initStudentJson, {updateOnDuplicate : ['isPresent'], returning: true, logging: console.log });

    // //these will not update so would be best to move to separate init call
    await CarReg.CarReg.bulkCreate(initCarRegJson, {ignoreDuplicates : true, returning: true, logging: console.log });
    await Classroom.Classroom.bulkCreate(initClassroomsJson, {ignoreDuplicates : true, returning: true, logging: console.log });

    res.send("Data Reset");
}