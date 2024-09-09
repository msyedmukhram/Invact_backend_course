import express from "express";
const app = express();

// Question 1:
// Create an endpoint that returns a welcome message.

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

function getWelcomeMessage() {
  return "Welcome to the service!";
}

// Question 2:
// Create an endpoint that takes a username as a query parameter and returns a greeting message.
app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});
function getGreetingMessage(username) {
  return "Hello," + username + "!";
}

// Question 3:
// Create an endpoint that takes a password as a query parameter and returns if it is strong (length > 15) or weak.
app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

function checkPasswordStrength(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is weak";
  }
}

// Question 4:
// Create an endpoint that takes two numbers as query parameters and returns their sum.
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2).toString());
});

function getSum(num1, num2) {
  return num1 + num2;
}

// Question 5:
// Create an endpoint that takes a username and a boolean isSubscribed indicating subscription status, and returns a message if the user is subscribed or not.
app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed === "true";
  res.send(getSubscriptionStatus(username, isSubscribed));
});
function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed) {
    return username + " is subscribed";
  } else {
    return username + " is not subscribed";
  }
}

// Question 6:
// Create an endpoint that takes a product price and a discount percentage, and returns the final price after discount.
app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount).toString());
});

function getDiscountedPrice(price, discount) {
  return price - price * (discount / 100);
}

// Question 7:
// Create an endpoint that takes a user's age, gender, and name, and returns a personalized greeting message.
app.get("/personalized-greeting", (req, res) => {
  let age = parseInt(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

function getPersonalizedGreeting(age, gender, name) {
  return "Hello, " + name + "! You are a " + age + " year old " + gender + ".";
}

// Question 8:
// Create an endpoint that takes a product price, discount percentage, and tax rate, and returns the final price after applying discount and tax
app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax).toString());
});

function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  return discountedPrice + discountedPrice * (tax / 100);
}

// Question 9:
// Create an endpoint that takes three fitness activity durations (running, cycling, swimming) and returns the total exercise time.
app.get("/total-exercise-time", (req, res) => {
  let running = parseInt(req.query.running);
  let cycling = parseInt(req.query.cycling);
  let swimming = parseInt(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});

function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
