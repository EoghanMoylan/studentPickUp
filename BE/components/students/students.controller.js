const {Student } = require("../students/students.model");
const carReg = require("../carregs/carregs.model");
const { Classroom } = require("../classrooms/classrooms.model");

exports.getStudentDataByCarReg = async (req, res) => {

  try{
    let allDetails = await carReg.CarReg.findOne({
      where : {
        carReg : req.params.id,
      },
      include: [
        {model: Student, include: [Classroom] }
      ]
    });
    res.send(200,  {"student_details" : allDetails, "return_message" : "success"});
  }
  catch(error)
  {
    res.send(500, {"return_message" : error});
  }
}

exports.updateStudent =  async (req, res) => {

  try{
    await Student.update(
      {
      isPresent : req.body.isPresent}
      ,
      {
        where : {
          id : req.body.id,
        }
    });

    res.send(200, {"return_message" : "Student Updated"});
  }
  catch(error)
  {
    res.send(500, {"return_message" :error});
  }
}

//get the all students in each classroom (by ID)
exports.getCountByClassroom =  async (req, res) => {
  try{
    let classroomCount = await Student.count({
      where : {
        classroomID : req.params.id,
        isPresent : true
      }
    });
    res.send(200, {"classroom_count" : classroomCount, "return_message" : "successful count"});
  }
  catch(error)
  {
    res.send(500, {"return_message" : error});
  }
}

//used for testing, not useful otherwise
exports.getAllStudents =  async (req, res) => {
  let allStudents = await Student.findAll();
  res.send(allStudents);
}