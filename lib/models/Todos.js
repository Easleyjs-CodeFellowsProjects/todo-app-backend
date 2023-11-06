'use strict';

const todos = (sequelize, DataTypes) => sequelize.define('Todos', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assignee: {
    type: DataTypes.STRING,
    allowNull: false
  },
  difficulty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  complete: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = todos;
