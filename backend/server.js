const express = require("express");
const authRouter = require("./routes/authRoute")

// setup the dotenv package so we can access .env file variables
require("dotenv").config();

// get the mongoose package to use MongoDB
const mongoose = require("mongoose");

const port = process.env.PORT;

const app = express();

//to get request parameters
app.use(express.json());

//to get body parameters
app.use(express.urlencoded({ extended: true }));

//middleware for details -
app.use((req, res, next) => {
    console.log("Request is made");
    console.log("Host name - " + req.hostname);
    console.log("Host name - " + req.path);
    console.log("Host name - " + req.method);
    next(); // to move on
  });

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/user",authRouter)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB database connection established");
    app.listen(port, () => console.log(`Listening on port : ${port}!`));
  })
  .catch((err) => {
    console.log("Error connecting with the MongoDB database: " + err);
  });
