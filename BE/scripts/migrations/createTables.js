'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      id: { type: Sequelize.BIGINT, field: 'id', autoIncrement: true, primaryKey: true, allowNull: false },
      classRoomID: { type: Sequelize.BIGINT, field: 'classRoomId', autoIncrement: true, primaryKey: false, allowNull: false },
      studentFirstName: { type: Sequelize.STRING, field: 'studentFirstName', autoIncrement: false, primaryKey: false, allowNull: false },
      studentLastName: { type: Sequelize.STRING, field: 'studentLastName', autoIncrement: false, primaryKey: false, allowNull: false }
    });

    await queryInterface.createTable('classRoom', {
      id: { type: Sequelize.BIGINT, field: 'id', autoIncrement: true, primaryKey: true, allowNull: false },
      classRoomID: { type: Sequelize.BIGINT, field: 'classRoomId', autoIncrement: true, primaryKey: false, allowNull: false },
      studentFirstName: { type: Sequelize.STRING, field: 'studentFirstName', autoIncrement: false, primaryKey: false, allowNull: false },
      studentLastName: { type: Sequelize.STRING, field: 'studentLastName', autoIncrement: false, primaryKey: false, allowNull: false }
    });

    await queryInterface.createTable('carReg', {
      id: { type: Sequelize.BIGINT, field: 'id', autoIncrement: true, primaryKey: true, allowNull: false },
      studentID: { type: Sequelize.BIGINT, field: 'studentId', autoIncrement: true, primaryKey: false, allowNull: false },
      carReg: { type: Sequelize.STRING, field: 'carReg', autoIncrement: true, primaryKey: false, allowNull: false },
    });
  },
};