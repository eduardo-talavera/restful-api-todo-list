const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

//importing the models
require("./models/Todo");

// DB
db.sync()
  .then(() => console.log("DB is Connected"))
  .catch((error) => console.log(error));

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api", todoRoutes);

// host and port
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 5000;

app.listen(port, host, () => {
  console.log(`server is running on ${host}:${port}`);
});
