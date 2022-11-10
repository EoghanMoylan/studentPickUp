const {Student } = require("../students/students.model");
const carReg = require("../carregs/carregs.model");
const { Classroom } = require("../classrooms/classrooms.model");

exports.getStudentDataByCarReg = async (req, res) => {

  let allDetails = await carReg.CarReg.findOne({
    where : {
      carReg : req.params.id,
    },
    include: [
      {model: Student, include: [Classroom] }
    ]
  });
  
  res.send(allDetails);

}

exports.getAllStudents =  async (req, res) => {

  let allStudents = await Student.findAll();
  
  res.send(allStudents);
}