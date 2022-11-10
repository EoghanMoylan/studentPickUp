
const Sequelize = require('sequelize');
const db = require('../../config/database');
const { Student } = require('../students/students.model');

//cars model
const CarReg = db.define(
    'cars',
    {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        studentID: {
            type: Sequelize.BIGINT,       
            references: {
                model: Student,
                key: "id"
            }
        },
        carReg: {
            type: Sequelize.STRING,
        }
    },
    {
      timestamps: false
    }
);

CarReg.belongsTo(Student, {foreignKey : "id"});

exports.CarReg = CarReg;