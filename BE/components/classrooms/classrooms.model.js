
const Sequelize = require('sequelize');
const db = require('../../config/database');


//classrooms model
const Classroom = db.define(
  'classrooms',
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    classroomName: {
      type: Sequelize.STRING,
    }
  },
  {
    timestamps: false
  }
);


exports.Classroom = Classroom;