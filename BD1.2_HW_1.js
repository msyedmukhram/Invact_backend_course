import express from "express";
const app = express();

// Question 1:Create an endpoint that takes the marks in two subjects and returns the total marks.

app.get("/total-marks", (req, res) => {
  let marks1 = parseFloat(req.query.marks1);
  let marks2 = parseFloat(req.query.marks2);

  let totalMarks = marks1 + marks2;
  res.send(totalMarks.toString());
});

// Question 2:Create an endpoint that takes the weight of 3 items in a shipment and returns the total weight of the shipment.
app.get("/total-weight", (req, res) => {
  let weight1 = parseFloat(req.query.weight1);
  let weight2 = parseFloat(req.query.weight2);
  let weight3 = parseFloat(req.query.weight3);

  let totalWeight = weight1 + weight2 + weight3;
  res.send(totalWeight.toString());
});

//Question 3:Create an endpoint that takes the annual salary and returns the monthly salary.
app.get("/monthly-salary", (req, res) => {
  let annualSalary = parseFloat(req.query.annualSalary);
  let monthlySalary = annualSalary / 12;

  res.send(monthlySalary.toString());
});

// Question 4:Create an endpoint to calculate the total number of pages read given pages per day and number of days.
app.get("/total-pages", (req, res) => {
  let pagesPerDay = parseFloat(req.query.pagesPerDay);
  let days = parseFloat(req.query.days);

  let totalPages = pagesPerDay * days;
  res.send(totalPages.toString());
});

// Question 5:Create an endpoint to calculate the conversion from one currency to another given the exchange rate.
app.get("/currency-conversion", (req, res) => {
  let amount = parseFloat(req.query.amount);
  let exchangeRate = parseFloat(req.query.exchangeRate);

  let conversionAmount = amount * exchangeRate;
  res.send(conversionAmount.toString());
});

// Question 6:Create an endpoint to calculate the average sales of a product, given the sales on 3 days.
app.get("/average-sales", (req, res) => {
  let sales1 = parseFloat(req.query.sales1);
  let sales2 = parseFloat(req.query.sales2);
  let sales3 = parseFloat(req.query.sales3);
  let averageSales = (sales1 + sales2 + sales3) / 3;
  res.send(averageSales.toFixed(2).toString());
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
