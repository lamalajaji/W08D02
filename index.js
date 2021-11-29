const express = require("express");
require("dotenv").config();
const db = require("./db/index");
const morgan = require("morgan")

const app = express();


/// app Level Middleware
app.use(express.json());

//// craete a middleware for roles router
const rolesRouter = require("./routers/routes/roles");
app.use(rolesRouter);



PORT = process.env.PORT || 4000;




app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});