const usersModel = require("./../../db/models/users");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT = Number(process.env.SALT);

const Secret = process.env.MEOW;


//// signUp function 
const signUp = async (req, res) => {
  const { email, passowrd, role } = req.body;

  const hashPass = await bcrypt.hash(passowrd, SALT);

  const newUSer = new usersModel({
    email: email.toLowerCase(),
    passowrd: hashPass,
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

////// login function
const login = (req, res) => {
  const { email, passowrd } = req.body;
  usersModel
    .findOne({ email: email.toLowerCase() })
    .populate("Role")
    .then(async (result) => {
      if (result) {
        if (result.email == email.toLowerCase()) {
          const matchedPass = await bcrypt.compare(passowrd, result.passowrd);
          if (matchedPass) {
            const auths = {
              email: result.email,
              role: result.role.role,
            };
            const option = {
              expiredTime: "120m",
            };
            const token = await jwt.sign(auths, Secret, option);
            res.status(200).json({ result, token });
          } else {
            res.status(400).json("Invalid Password OR Email !");
          }
        } else {
          res.status(400).json("Invalid Password OR Email !");
        }
      } else {
        res.status(404).json("Email Doesn't Exist !");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { signUp, login };
