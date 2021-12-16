const express = require("express");
const app = express();
let { people } = require("./data");

//static asstets
app.use(express.static("./methods-public"));
//parse from data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}!`);
  }
  res.status(401).send("please enter name!");
});

app.get("/apis/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/apis/people", (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, msg: name });
});

//update data
app.put("/apis/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "please provide name value!" });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).json({ success: true, data: newPeople });
});

app.delete("/apis/people/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params, id);
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  console.log(newPeople);
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5113, () => {
  console.log("SERVER is listening on port 5113...");
});
