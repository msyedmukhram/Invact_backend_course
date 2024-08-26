const express = require("express");
const app = express();

//Question 1: Send a custom commit message
app.get("/custom-commit", (req, res) => {
  let type = req.query.type;
  let message = req.query.message;
  let result = type + ": " + message;
  res.send(result);
});

//Question 2: Generate certificate for students
app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  let result =
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing the course " +
    courseName;
  res.send(result);
});

//Question 3: Configure a custom out-of-office message
app.get("/autoreply", (req, res) => {
  let startMonth = req.query.startMonth;
  let endMonth = req.query.endMonth;
  let result =
    "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from " +
    startMonth +
    " till " +
    endMonth +
    ". Your enquiry will be resolved by another colleague";
  res.send(result);
});

//Question 4: Send a secure URL
app.get("/secureurl", (req, res) => {
  let domain = req.query.domain;
  let result = "https://" + domain;
  res.send(result);
});

//Question 5: Send a verification OTP
app.get("/sendotp", (req, res) => {
  let otpCode = req.query.otpCode;
  let result =
    "Your OTP for account verification is " +
    otpCode +
    ". Do not share this with anyone";
  res.send(result);
});

// Question 6 : Send a welcome mail to new user
app.get("/welcome", (req, res) => {
  let firstName = req.query.firstName;
  let email = req.query.email;
  let result =
    "Hey " +
    firstName +
    ". We're excited to have you here, we'll send future notifications to your registered mail (" +
    email +
    ")";
  res.send(result);
});

//Question 7: Generate Github profile URL
app.get("/github-profile", (req, res) => {
  let userName = req.query.userName;
  let result = "https://github.com/" + userName;
  res.send(result);
});

//Question 8: Convert text into CSV row format
app.get("/text-to-csv", (req, res) => {
  let id = req.query.id;
  let email = req.query.email;
  let rollNumber = req.query.rollNumber;
  let result = id + ", " + email + ", " + rollNumber;
  res.send(result);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
