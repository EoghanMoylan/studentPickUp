
const Sequelize = require('sequelize');
const db = require('../../config/database');
// const { CarReg } = require('../carregs/carregs.model');
const { Classroom } = require('../classrooms/classrooms.model');


//student model
const Student = db.define(
  'students',
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: false,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    isPresent: {
        type: Sequelize.BOOLEAN,
      },
    lastName: {
        type: Sequelize.STRING,
      },
    classroomID: {
      type: Sequelize.BIGINT,
      references: {
        model: Classroom,
        key: "id"
      }
    }
  },
  {
    timestamps: false
  }
);

Student.belongsTo(Classroom, {foreignKey : "classroomID"});
exports.Student = Student;