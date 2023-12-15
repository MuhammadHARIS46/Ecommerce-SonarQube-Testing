const express = require("express");
const app = express();
app.disable("x-powered-by");
const dotenv = require("dotenv");
const connectToMongo = require("./db");
const cors = require("cors");
const cookies = require("cookie-parser");
app.use(cookies());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

dotenv.config();
connectToMongo().then(() => console.log("connected to DB!"));

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/product", require("./routes/product"));
app.use("/api/order", require("./routes/order"));
app.use("/api/payment", require("./routes/payment"));
app.use("/api/withdraw", require("./routes/withdraw"));

app.use("/api/shop", require("./routes/shop"));
app.listen(9000, () => {
  console.log("app is running on port: " + 9000);
});
