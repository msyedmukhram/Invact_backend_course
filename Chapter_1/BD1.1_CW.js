import express from "express";
const app = express();
const port = 3000;

app.get("/shout", (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

app.get("/fullname", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + " " + lastName;
  res.send(fullName);
});

app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + ", " + year;
  res.send(formattedDate);
});

app.get("/greet", (req, res) => {
  let name = req.query.name;
  let greeting = "Namaste, " + name;
  res.send(greeting);
});

app.get("/address", (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ", " + city + ", " + state;
  res.send(address);
});

app.get("/email", (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = username + "@" + domain;
  res.send(email);
});

app.listen(port, () => {
  console.log("server is running on https://localhost:" + port);
});
