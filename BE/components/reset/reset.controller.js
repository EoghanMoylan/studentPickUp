'use strict';
const Student = require("../students/students.model");
const CarReg = require("../carregs/carregs.model");
const Classroom = require("../classrooms/classrooms.model");

const initStudentJson = require('../../students.json');
const initCarRegJson = require('../../carregs.json');
const initClassroomsJson = require('../../classrooms.json');

exports.resetData = async (req, res) => {

    try{
        //quick and dirty just to initially populate and then in turn reset the DB with default values;
        await Student.Student.bulkCreate(initStudentJson, {updateOnDuplicate : ['isPresent'], returning: true, logging: console.log });

        // //these will not update so would be best to move to separate init call if scaling up 
        //but for now as all are duplicates nothing will write to DB
        await CarReg.CarReg.bulkCreate(initCarRegJson, {ignoreDuplicates : true, returning: true, logging: console.log });
        await Classroom.Classroom.bulkCreate(initClassroomsJson, {ignoreDuplicates : true, returning: true, logging: console.log });

        res.send(200, {"return_message" : "Data Reset"});
    }

    catch(error){
        res.send(500, {"return_message" :error});
    }
}