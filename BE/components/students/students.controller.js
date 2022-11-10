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
    res.send(200, allDetails);
  }
  catch(error)
  {
    res.send(500, error);
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

    res.send(200, "updated");
  }
  catch(error)
  {
    res.send(500, error);
  }
}

//used for testing, not useful otherwise
exports.getAllStudents =  async (req, res) => {
  let allStudents = await Student.findAll();
  res.send(allStudents);
}