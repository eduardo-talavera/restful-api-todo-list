const express = require('express');
const router = express.Router();

// importing controllers
const {
  listTodos,
  getSingleTodo,
  createTodo,
  changeStateTodo,
  updateTodo,
  removeTodo
} = require('../controllers/todoController'); 

// get all todos
router.get('/todos', listTodos);

// get a todo
router.get('/todos/:id', getSingleTodo);

// create a todo
router.post('/todos', createTodo);

// complete a todo
router.patch('/todos/:id', changeStateTodo);

// update a todo
router.put('/todos/:id', updateTodo);

// delete a todo
router.delete('/todos/:id', removeTodo);


module.exports = router;