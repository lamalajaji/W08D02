const express = require("express");
const usersRouter = express.Router();

const {signUp} = require("../controllers/users")


usersRouter.post("/register", signUp);




