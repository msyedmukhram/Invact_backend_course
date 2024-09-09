import express from "express";
import cors from "cors";

let app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Stock Protfolio analysis API!");
});

// Endpoint 1: Calculate the Returns of the Stocks added
app.get("/calculate-returns", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);
  let result = (marketPrice - boughtAt) * quantity;
  res.send(result.toString());
});

// Endpoint 2: Calculate the Total Returns
app.get("/total-returns", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = stock1 + stock2 + stock3 + stock4;
  res.send(result.toString());
});

// Endpoint 3: Calculate the Return Percentage
app.get("/calculate-return-percentage", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let result = (returns / boughtAt) * 100;
  res.send(result.toString());
});

// Endpoint 4: Calculate the Total Return Percentage
app.get("/total-return-percentage", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = stock1 + stock2 + stock3 + stock4;
  res.send(result.toString());
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value
app.get("/status", (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let result;
  if (returnPercentage > 0) {
    result = "profit";
  } else {
    result = "loss";
  }

  res.send(result);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
