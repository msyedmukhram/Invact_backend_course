import express from "express";
const app = express();

let person = {
  firstName: "Amit",
  lastName: "Sharma",
  gender: "male",
  age: 30,
  isMember: true,
};

// Exercise 1: Return the Person Object
app.get("/person", (req, res) => {
  res.json(person);
});

// Exercise 2: Access the Full Name of the Person
app.get("/person/fullname", (req, res) => {
  let fullName = getFullName(person);
  res.json({ fullName: fullName });
});

function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

// Exercise 3: Access Just the First Name and Gender of the Person
app.get("/person/firstname-gender", (req, res) => {
  let firstNameAndGender = getFirstNameAndGender(person);
  res.json(firstNameAndGender);
});

function getFirstNameAndGender(person) {
  return {
    firstName: person.firstName,
    gender: person.gender,
  };
}

// Exercise 4: Increment the Age of the Person and Return the Updated Object
app.get("/person/increment-age", (req, res) => {
  let updatedPerson = incrementAge(person);
  res.json(updatedPerson);
});

function incrementAge(person) {
  person.age++;
  return person;
}

// Exercise 5: Return the Full Name and Membership Status of the Person
app.get("/person/fullname-membership", (req, res) => {
  let fullNameAndMembership = getFullNameAndMembership(person);
  res.json(fullNameAndMembership);
});

function getFullNameAndMembership(person) {
  return {
    fullName: getFullName(person),
    isMember: person.isMember,
  };
}

// Exercise 6: Get Final Price After Discount for Members

app.get("/person/final-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let finalPrice = getFinalPrice(cartTotal, person.isMember);
  res.json(finalPrice);
});

function getFinalPrice(cartTotal, isMember) {
  let discount = 0.1; //10%
  let finalPrice;
  if (isMember) {
    finalPrice = cartTotal * (1 - discount);
  } else {
    finalPrice = cartTotal;
  }

  return { finalPrice: finalPrice.toFixed(2) };
}

// Exercise 7: Get Shipping Cost Based on Cart Total and Membership Status
app.get("/person/shipping-cost", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let shippingCost = getShippingCost(cartTotal, person.isMember);
  res.json(shippingCost);
});

function getShippingCost(cartTotal, isMember) {
  let shippingCost;
  if (cartTotal > 500 && isMember) {
    shippingCost = 0;
  } else {
    shippingCost = 99;
  }
  return { shippingCost: shippingCost.toFixed(2) };
}

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
