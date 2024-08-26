import express from "express";
const app = express();

app.get("/", (req, res) => {
  const htmlText = `
    <h1 style='text-align:center'>Welcome to Backend Development Course</h1>
    <h3 style='text-align:center'>Api's of BD1.4_HW_2.js are hosted here.</h3>
  `;
  res.send(htmlText);
});

// Question 1:
// Given username generate a GitHub profile URL for the user
app.get("/github-profile", (req, res) => {
  let username = req.query.username;
  res.send(generateProfileUrl(username));
});

function generateProfileUrl(username) {
  let result = "https://github.com/" + username;
  return result;
}

// Question 2:
// Declare 3 variables named firstName , lastName & courseName
// To process requests, create an endpoint /certificate
// Use the values to generate a certificate for the student
// Write a function generateCertificate() which takes the above variables and returns the certificate as expected

app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  res.send(generateCertificate(firstName, lastName, courseName));
});

function generateCertificate(firstName, lastName, courseName) {
  let result =
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing the course " +
    courseName;
  return result;
}

// Question 3:
// Create an endpoint that takes maths, science & english as query parameters and returns grade in percentage
app.get("/grade", (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
  res.send(calculateGrade(maths, science, english));
});
function calculateGrade(maths, science, english) {
  let gradeInPercentage = ((maths + science + english) / 300) * 100;
  return "Your grade in percentage is " + Math.round(gradeInPercentage) + "%";
}

// Question 4:
// Create an endpoint that takes billAmount & numberOfFriends as query parameters and returns the result
app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);
  res.send(splitBill(billAmount, numberOfFriends));
});

function splitBill(billAmount, numberOfFriends) {
  let splitAmount = billAmount / numberOfFriends;
  return "Result: Each friend owes Rs." + splitAmount + " against the bill";
}

// Question 5:
// Create an endpoint that takes a totalHours & hourlyWage and returns the monthly salary.

app.get("/monthly-salary", (req, res) => {
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  res.send(calculateSalary(totalHours, hourlyWage));
});

function calculateSalary(totalHours, hourlyWage) {
  let monthlySalary = hourlyWage * totalHours;
  return "Result: Your monthly salary is " + monthlySalary;
}

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
