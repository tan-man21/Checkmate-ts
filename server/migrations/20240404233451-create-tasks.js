'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      task_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      task_name: {
        type: Sequelize.TEXT
      },
      date_created: {
        type: Sequelize.DATE
      },
      date_started: {
        type: Sequelize.DATE
      },
      date_due: {
        type: Sequelize.DATE
      },
      date_completed: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      list_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'List', key: 'list_id' }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};