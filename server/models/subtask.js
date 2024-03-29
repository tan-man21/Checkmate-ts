'use strict';
const {
  Model, Deferrable
} = require('sequelize');

const List = require('./list')
const Task = require('./task')

module.exports = (sequelize, DataTypes) => {
  class SubTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task, List}) {
      // define association here
      SubTask.belongsTo(Task, {
        foreignKey: 'task_id',
        as: 'task'
      })

      SubTask.belongsTo(List, {
        foreignKey: 'list_id',
        as: 'list'
      })
    }
  }
  SubTask.init({
    sub_task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: List,
        key: 'list_id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: Task,
        key: 'task_id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
    sub_task_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    completed: DataTypes.BOOLEAN,
    date_created: DataTypes.DATE,
    date_started: DataTypes.DATE,
    date_due: DataTypes.DATE,
    date_completed: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SubTask',
  });
  return SubTask;
};