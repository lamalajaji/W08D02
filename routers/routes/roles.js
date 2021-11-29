const express = require("express");
const rolesRouter = express.Router();

const { createRole, getRoles } = require("../controllers/roles");

rolesRouter.post("/role", createRole);
rolesRouter.get("/roles", getRoles);


module.exports = rolesRouter;
