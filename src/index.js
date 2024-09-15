import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

/*This below is the new ES6 Syntax of arrow functions, so anything left of the fat arrow is 
the input parameter and anything right of it will be the function, for multiple inputs we can separate them
by using commas. Also if the function contains only one statement then we dont need braces {}*/

// const newNumbers = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbe = numbers.filter((num) => num < 10);

// var numbers = [3, 56, 2, 48, 5];

// Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );

////Find - find the first item that matches from an array.
// const newNumber = numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex((num) => num > 10);
