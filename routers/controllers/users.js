const usersModel = require("./../../db/models/users");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const SALT = Number(process.env.SALT);

const Secret = process.env.MEOW;

const signUp =  async (req, res) => {
  const { email, passowrd, role } = req.body;

  const hashPass = await bcrypt.hash(passowrd, SALT);

  const newUSer = new usersModel({
    email : email.toLowerCase(),
    passowrd : hashPass,
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
