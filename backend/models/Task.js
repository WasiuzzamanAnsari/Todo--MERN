import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

export default Task;
