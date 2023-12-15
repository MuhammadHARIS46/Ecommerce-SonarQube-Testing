const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: false,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
  },
  { timestamps: true }
);

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.SECRET_VALUE, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const user = mongoose.model("User", UserSchema);
module.exports = user;
