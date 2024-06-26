'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SubTasks', {
      sub_task_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      list_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'List', key: 'list_id' }
      },
      task_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Task', key: 'task_id' }
      },
      sub_task_name: {
        type: Sequelize.TEXT
      },
      completed: {
        type: Sequelize.BOOLEAN
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SubTasks');
  }
};