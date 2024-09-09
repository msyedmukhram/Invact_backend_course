import express from "express";
const app = express();

app.get("/whisper", (req, res) => {
  let name = req.query.name;
  let result = name.toUpperCase();
  res.send(result);
});

app.get("/full-product-name", (req, res) => {
  let companyName = req.query.companyName;
  let productName = req.query.productName;
  let fullProductName = companyName + " " + productName;
  res.send(fullProductName);
});

app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + "/" + year;
  res.send(formattedDate);
});

app.get("/greet", (req, res) => {
  let city = req.query.city;
  let greeting = "You live in " + city;
  res.send(greeting);
});

app.get("/capital", (req, res) => {
  let country = req.query.country;
  let capital = req.query.capital;
  let countryCapital = capital + " is the capital of " + country;
  res.send(countryCapital);
});

app.get("/email", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let domain = req.query.domain;
  let email = firstName + "." + lastName + "@" + domain;
  res.send(email);
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
