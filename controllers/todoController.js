const Todo = require("../models/Todo");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.createTodo = async (req, res) => {
  try {
    await Todo.create(req.body);
    res.json({ msg: "the todo has been created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: errorHandler(error)
    });
  }
};

exports.listTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({ order: [['createdAt', 'DESC']] });
    res.json(todos);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: errorHandler(error)
    });
  }
};

exports.getSingleTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ where: { id } });
    res.json(todo);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: errorHandler(error)
    });
  }
};

exports.changeStateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ where: { id } });

    //change the state
    let state = false;
    if (todo.completed === state) {
      state = true;
    }
    todo.completed = state;

    const todoCompleted = await todo.save(); //saving the state at db

    res.json({
      msg: "The todo has been changed successfully",
      todoCompleted,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: errorHandler(error)
    });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { name, title, completed } = req.body; 
  try {
    // update todo
    const todoUpdated = await Todo.update({ name, title, completed }, {
      where: { id },
      
    });
    res.json({
      msg: "The todo has been update successfully",
      todoUpdated
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: errorHandler(error)
    });
  }
};

exports.removeTodo = async (req, res) => {
  const { id } = req.params;
  try {
    // Delete todo
    await Todo.destroy({
      where: { id }
    });
    res.json({msg: 'the todo has been deleted successfully'})
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: errorHandler(error)
    });
  }
};
