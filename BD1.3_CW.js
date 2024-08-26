import express from "express";
const app = express();

// Question 1:
// Create an endpoint that takes a number as a query parameter and returns if the number is positive or negative.
app.get("/check-number", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = "positive";
  } else {
    result = "negative";
  }
  res.send("Number is " + result);
});

// Question 2:
// Create an endpoint that takes a number as a query parameter and returns if the number is even or odd.
app.get("/check-even-odd", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number % 2 === 0) {
    result = "even";
  } else {
    result = "odd";
  }
  res.send("Number is " + result);
});

// Question 3:
// Create an endpoint that takes a boolean query parameter isLoggedIn and returns if the user is logged in.
app.get("/check-login", (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === "true";
  let result;
  if (isLoggedIn) {
    result = "User is logged in";
  } else {
    result = "User is not logged in";
  }
  res.send(result);
});

// Question 4:
// Create an endpoint that takes an age as a query parameter and returns if the user is eligible for a discount (age over 65).
app.get("/check-discount", (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age > 65) {
    result = "User is eligible for a discount";
  } else {
    result = "User is not eligible for a discount";
  }
  res.send(result);
});

// Question 5:
// Create an endpoint that takes a number as a query parameter and returns if the number is positive, negative, or zero.
app.get("/check-number-type", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = "positive";
  } else if (number < 0) {
    result = "negative";
  } else {
    result = "zero";
  }
  res.send("Number is " + result);
});

// Question 6:
// Create an endpoint that takes a temperature as a query parameter and returns if the temperature is cold (below 15°C), warm (15°C to 25°C), or hot (above 25°C).
app.get("/check-temperature", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result;
  if (temperature < 15) {
    result = "cold";
  } else if (temperature <= 25) {
    result = "warm";
  } else {
    result = "hot";
  }
  res.send("Temperature is " + result);
});

// Question 7:
// Create an endpoint that takes a steps as a query parameter and returns if the user's activity level is low (below 5000), moderate (5000 to 10000), or high (above 10000).
app.get("/check-activity-level", (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result;
  if (steps < 5000) {
    result = "low";
  } else if (steps <= 10000) {
    result = "moderate";
  } else {
    result = "high";
  }
  res.send("Activity level is " + result);
});

// Question 8:
// Create an endpoint that takes likes as a query parameter and returns if a social media post has low (below 100), medium (100 to 500), or high engagement (above 500).
app.get("/check-engagement", (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes < 100) {
    result = "low";
  } else if (likes <= 500) {
    result = "medium";
  } else {
    result = "high";
  }
  res.send("Engagement level is " + result);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
