import express from "express";
const app = express();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ages = [10, 20, 30, 15, 17, 25];
let words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
let fileSizes = [50, 200, 75, 120, 30, 90, 150];



// Question 1: Return Only the Even Numbers
app.get("/even-numbers", (req, res) => {
    let result = numbers.filter(ele => filterEvenNumbers(ele)); 
    res.json(result);
});

function filterEvenNumbers (ele) {
    return ele % 2 === 0;
}


// Question 2: Return Only the Ages Greater Than 18
app.get("/adult-ages", (req, res) => {
    let result = ages.filter(ele => filterAges(ele)); 
    res.json(result);
});
function filterAges (ele) {
    return ele > 18;
}


// Question 3: Return Only the Words Longer Than 5 Characters
app.get("/long-words", (req, res) => {
    let result = words.filter(ele => filterLongWords(ele, 5));
    res.json(result);
});
function filterLongWords (ele, filterParam) {
    return ele.length > filterParam;
}


// Question 4: Return Only the Files Smaller Than a Certain Size
app.get("/small-files", (req, res) => {
    let filterParam = parseFloat(req.query.filterParam);
    let result = fileSizes.filter(ele => filterSmallFiles(ele, filterParam)); 
    res.json(result);
});

function filterSmallFiles(ele, filterParam) {
    return ele < filterParam;    
}


app.listen(3000, () => {
    console.log("server is running on port 3000");
});