const mongoose = require("mongoose");
const connectToMongo = async () => {
  console.log("env =>" + process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI);
};
module.exports = connectToMongo;
