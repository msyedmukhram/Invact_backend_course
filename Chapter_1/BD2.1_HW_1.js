import express from "express";
const app = express();

let book = {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    publicationYear: 1997,
    genre: "Novel",
    isAvailable: true,
    stock: 5
}

// Question 1:
// Create an endpoint that returns the details of a book stored on the server.
app.get("/book", (req, res) => {
    res.json(book);
});


// Question 2:
// Design an endpoint that provides the full title and author of the book.
app.get("/book/fulltitle-author", (req, res) => {
    let fullTitleAndAuthor = getFullTitleAndAuthor (book); 
    res.json({ fullTitleAndAuthor: fullTitleAndAuthor });
});

function getFullTitleAndAuthor(book) {
    return book.title + " by " + book.author;
}


// Question 3:
// Develop an endpoint to access the genre and availability status of the book.
app.get("/book/genre-availability", (req, res) => {
    let genreAndAvailability = getGenreAndAvailability(book); 
    res.json(genreAndAvailability);
});

function getGenreAndAvailability(book) {
    return {
        genre: book.genre,
        isAvailable: book.isAvailable
    };
}



// Question 4:
// Create an endpoint to calculate and return the age of the book.
app.get("/book/age", (req, res) => {
    let bookAge = calculateBookAge(book);
    res.json({ age: bookAge });    
});

function calculateBookAge(book) {
    let currentYear = 2024;
    return currentYear - book.publicationYear;
}


// Question 5:
// Implement an endpoint to provide a summary of the book including its title, author, genre, and publication year.
app.get("/book/summary", (req, res) => {
    let summary = getBookSummary (book);
    res.json({ summary: summary });
});
    
function getBookSummary (book) {
    return "Title: " + book.title + ", Author: " + book.author + ", Genre: " + book.genre + "Published: " + book.publicationYear;
}


// Question 6:
// Develop an endpoint to check the stock status of the book and determine if an order is required.

app.get("/book/stock-status", (req, res) => {
    let stockStatus = checkStockAndOrder(book); 
    res.json(stockStatus);
});

function checkStockAndOrder (book) {
    if (book.stock > 0) {
    return { status: "In Stock", stock: book.stock };
    } else {
        return { status: "Out of Stock", message: "Order Required" };
    }
}

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

