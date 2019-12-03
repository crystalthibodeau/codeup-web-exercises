"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
//
function sayHello(name) {
    return "Hello " + name + "!"
}

// console.log(sayHello("Crystal"));
//
// console.log(sayHello("Thomas"));
//
// console.log(sayHello("Adam"));

// class notes here



// end of class notes here
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// var helloMessage = sayHello("Crystal");
// console.log(helloMessage);





/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// var myName = "Crystal";


// console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// class notes here....

// var isTwo = function(num) {
//     return num === 2;
// }
//
// console.log(isTwo(1)); // returns false
// console.log(isTwo(2)); // returns true
// console.log(isTwo(3)); // returns false

// end of class notes here....

// function isTwo(x){
//     return x === 2;
// }
// //
// console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// start of class notes here....
//
// var calculateTip = function(tipPercent, billTotal) {
//     return tipPercent * billTotal;
// }
// console.log(calculateTip(.20, 20));
// console.log(calculateTip(.25, 25.50));
// console.log(calculateTip(.15, 33.42));
//
// // end of class notes here...
// //
// function calculateTip(percentage, bill){
//     // tip = bill * percentage;
//     return bill* percentage;
// }
// console.log(alert("Tip amount is: $" + calculateTip(.20, 20)));
// console.log(alert("Tip amount is: $" + calculateTip(.25, 25.50)));
// console.log(alert("Tip amount is: $" + calculateTip(.15, 33.42)));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


// // start of class notes here .....
//     var tipPercentage = prompt("What percentage would you like to tip?(0.00 to 1.00)");
//     var billTotal= prompt("what was the total of your bill?");
//     var amountToTip = alert("Amount to tip is: $" + calculateTip(tipPercentage, billTotal));
//
//     console.log(amountToTip);

//     // end of class notes ....


//
// var bill = Number(prompt('What is the total price of your bill?'));
// console.log(bill);
// var percentage = Number(prompt("what percentage would you like to tip? (0.00 t0 1.00)"));
// // console.log(percentage);
//
// function calculateTip(bill, percentage){
//     // tip = bill * percentage;
//     return bill * percentage;
// }
// alert("tip amount should be $" + calculateTip(bill, percentage.toFixed(2)));



// alert("total bill is $" + bill + );


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// class notes start here....
// var applyDiscount = function (price, discountPercentage){
//     var discountAmount = price * discountPercentage;
//     return price - discountAmount;
// }
// var originalPrice = 100;
// var discountPercentage = .2; // 20%
//
// console.log(applyDiscount(originalPrice, discountPercentage)); // 80
// console.log(applyDiscount(45.99, 0.12)); // 40.4712
// console.log(applyDiscount(60, 0.12)); //
// class notes end here...



// start personal notes....

//     // add in between for percentage
//
// var applyDiscount = price - discountAmount();
// var discountPercent = price * percentage;
//
// var price = Number(prompt("What is the total bill price?"));
// var percentage = Number(prompt("What is the discount amount?"));
//
// function calculateDiscount(price, percentage){
//     return price * percentage;
// }
// console.log(alert("discount amount is: $" + calculateDiscount(price, percentage)));
//
// function discountAmount(price, applyDiscount){
//     return price - applyDiscount;
// }
// console.log(alert("Final bill amount is: $" + discountAmount(price, calculateDiscount(price, percentage))));
