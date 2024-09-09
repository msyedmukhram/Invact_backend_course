import express from "express";
const app = express();

// Question 1: Body Mass Index (BMI) Calculator
app.get("/bmi", (req, res) => {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let bmi = weight / (height * height);
  res.send(bmi.toFixed(2).toString());
});

// Question 2: Calculate grocery checkout pric
app.get("/checkout", (req, res) => {
  let product = req.query.product;
  let units = parseFloat(req.query.units);
  let price = parseFloat(req.query.price);
  let totalPrice = units * price;
  res.send("Your total for " + units + " " + product + " is " + totalPrice);
});

// Question 3: Calculate grade percentage
app.get("/grade", (req, res) => {
  let maths = parseFloat(req.query.maths);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english);
  let gradeInPercentage = ((maths + science + english) / 300) * 100;
  res.send(
    "Your grade in percentage is " + Math.round(gradeInPercentage) + "%",
  );
});

// Question 4: Return bill amount after applying discount
app.get("/discounted-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);
  let discountedPrice = cartTotal - cartTotal * (discount / 100);
  res.send("Result: Your bill amount is " + discountedPrice);
});

// Question 5: Split bill among friends
app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  let splitAmount = billAmount / numberOfFriends;
  res.send("Result: Each friend owes Rs. " + splitAmount + " against the bill");
});

// Question 6: Convert Celsius to Fahrenheit
app.get("/celsius-to-fahrenheit", (req, res) => {
  let celsius = parseFloat(req.query.temperature);
  let fahrenheit = (celsius * 9) / 5 + 32;
  res.send("Result: " + fahrenheit + " Fahrenheit");
});

// Question 7: Calculate monthly salary
app.get("/monthly-salary", (req, res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let monthlySalary = hourlyWage * totalHours;
  res.send("Result: Your monthly salary is ₹" + monthlySalary);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
