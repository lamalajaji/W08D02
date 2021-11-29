const express = require("express");
require("dotenv").config();
const db = require("./db/index");
const morgan = require("morgan")

const app = express();


/// app Level Middleware
app.use(express.json());
///// morgan middleware
app.use(morgan("dev"));

//// craete a middleware for roles router
const rolesRouter = require("./routers/routes/roles");
app.use(rolesRouter);

////// create a middleware for users router
const usersRouter = require("./routers/routes/users");
app.use(usersRouter);

PORT = process.env.PORT || 4000;




app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});