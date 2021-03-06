const {Sequelize, DataTypes} = require("sequelize");
const db = require("../config/db");


const Todo = db.define(
  "todo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },  
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "the name can not be empty",
        }
      },
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "the title can not be empty",
        }
      },
      unique: {
        args: true,
        msg: 'the title already exists try another'
     }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },
  { }
);

module.exports = Todo;
