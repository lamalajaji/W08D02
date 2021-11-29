const usersModel = require("./../../db/models/users");
require("dotenv").config();

const signUp = (req, res) => {
  const { email, passowrd, role } = req.body;

  const newUSer = new usersModel({
    email,
    passowrd,
    role,
  });
  newUSer
    .save()
    .then((result) => {
      result.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { signUp };
