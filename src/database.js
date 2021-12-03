const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/todo-socket")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));
