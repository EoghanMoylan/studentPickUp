const {Student } = require("../students/students.model");
const { Classroom } = require("../classrooms/classrooms.model");


//Although only will exist in this project, I am including this so that it could be expanded to include more in future
exports.getAllClassrooms =  async (req, res) => {
  let allClassrooms = await Classroom.findAll();
  res.send({"return_message" : "success", "classrooms" : allClassrooms});
}