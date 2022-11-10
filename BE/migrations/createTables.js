'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      id: { type: Sequelize.BIGINT, field: 'id', autoIncrement: false, primaryKey: true, allowNull: false },
      classroomID: { type: Sequelize.BIGINT, field: 'classroomID', autoIncrement: false, primaryKey: false, allowNull: false },
      isPresent: { type: Sequelize.BOOLEAN, field: 'isPresent', autoIncrement: false, primaryKey: false, allowNull: false },
      firstName: { type: Sequelize.STRING, field: 'firstName', autoIncrement: false, primaryKey: false, allowNull: false },
      lastName: { type: Sequelize.STRING, field: 'lastName', autoIncrement: false, primaryKey: false, allowNull: false }
    });

    await queryInterface.createTable('classrooms', {
      id: { type: Sequelize.BIGINT, field: 'id', autoIncrement: false, primaryKey: true, allowNull: false },
      classroomName: { type: Sequelize.STRING, field: 'classroomName', autoIncrement: false, primaryKey: false, allowNull: false },
    });

    await queryInterface.createTable('cars', {
      id: { type: Sequelize.BIGINT, field: 'id', autoIncrement: true, primaryKey: true, allowNull: false },
      studentID: { type: Sequelize.BIGINT, field: 'studentID', autoIncrement: false, primaryKey: false, allowNull: false },
      carReg: { type: Sequelize.STRING, field: 'carReg', autoIncrement: false, primaryKey: false, allowNull: false }, 
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('classroom');
    await queryInterface.dropTable('students');
    await queryInterface.dropTable('cars');
  }
};