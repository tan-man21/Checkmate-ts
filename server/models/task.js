'use strict';
const {
  Model, Deferrable
} = require('sequelize');

const List = require('./list')

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ List, SubTask }) {
      // define association here
      Task.belongsTo(List, {
        foreignKey: 'list_id',
        as: 'list'
      })

      Task.hasMany(SubTask, {
        foreignKey: 'task_id',
        as: 'subtasks'
      })
    }
  }
  Task.init({
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    completed: DataTypes.BOOLEAN,
    task_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_created: DataTypes.DATE,
    date_started: DataTypes.DATE,
    date_due: DataTypes.DATE,
    date_completed: DataTypes.DATE,
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: List,
        key: 'list_id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};