# RESTful API Todo List

## Minimum requirements 📄
- Node >= 12.8
- postgre >= 10.15


## Installation and configuration 📦
- clone or download the project
- open the project from a command terminal
- run `npm install` to install all dependencies
- rename the vars.env.example file to vars.env and set the variables as needed

## file vars.env

Example:

```env

  HOST=localhost
  HOST_DB=localhost
  PORT=5000
  PORT_DB=5432
  USER_DB=postgres
  PASSWORD_DB=your_pass
  DATABASE=your_database
```

## create the database in postgre

- run the following statement in a psql shell or you can also create one from an administrator like pgAdmin 4
run

```sql

 CREATE DATABASE your_database;
```

## Execution 🚀🚀 
- Development: run in a terminal `npm run dev`
- Production: run in a terminal `npm start`


To clone or download the Frontend click on the following link 
<br>
<a href="https://github.com/eduardo-talavera/todo-list-app-client">Todo List Client</a>
