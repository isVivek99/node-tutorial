const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");
//static asstets
app.use(express.static("./methods-public"));
//parse from data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
//
app.use("/apis/people", people);
app.use("/login", auth);
//////

app.listen(5113, () => {
  console.log("SERVER is listening on port 5113...");
});
