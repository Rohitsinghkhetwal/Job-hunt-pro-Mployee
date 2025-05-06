const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connection = require("./connection/Connection.js");
const JobsRoute = require("./route/jobs.route.js");

const app = express();
const Port = process.env.PORT || 6000;
connection();
console.log("Connection setup success")

app.get("/", (req, res) => {
  res.send("Hello");
})
app.use(cors())

app.use("/api/v1", JobsRoute)
console.log("Routes initiated success")

app.listen(Port,() => {
  console.log(`Port is running in localhost ${Port}`)
})

