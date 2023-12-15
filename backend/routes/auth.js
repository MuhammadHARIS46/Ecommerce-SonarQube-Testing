const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "Iamagoodbou";
const { body, validationResult } = require("express-validator");

// Route1: Create a user using POST "api/auth/createuser": No login required

router.post(
  "/createuser",
  [
    body("firstName", "Enter valid first name").isLength({
      min: 3,
    }),
    body("lastName", "Enter valid last name").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password Must be at least 5 charachters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;

    //If email already exists then show the bad message and error
    let user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      return res.status(400).json({
        success,
        error: "The user with the same email already exists",
      });
    }

    //If error occured send a bad message and errors
    const errors = validationResult(req);
    try {
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success,
          errors: errors.array(),
        });
      }
      const salt = await bcrypt.genSaltSync(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //Create user in database
      user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: secPass,
        email: req.body.email,
      });

      //authentication Token
      const data = {
        user: {
          id: user.id,
        },
      };
      success = true;
      const authToken = jwt.sign(data, JWT_SECRET);
      delete user._doc.password;

      res.json({
        success,
        ...user._doc,
        authToken,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  }
);

//ROUTE:2 Login a user using POST "api/auth/login": No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "password can not be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    //If email already exists then show the bad message and error
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email: email,
      });
      if (!user) {
        return res.status(400).send({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).send({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      delete user._doc.password;
      res.json({
        success,
        ...user._doc,
        authToken,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error occured ");
    }
  }
);

module.exports = router;
