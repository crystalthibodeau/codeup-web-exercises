"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// ============================1. work and answer====================================


// var isEven = function(someNumber){
//     return (someNumber%2 == 0) ? "Yes, it is!" : "No, it is not.";
// };
// var anyNumber;
// var confirmMessage = confirm("Would you like to enter a number?");
// // var isNegativeOrNot = anyNumber ;
//

//canEnterNumber === Number &&


var wouldLikeNumber = confirm("Would you like to enter in a number?");
if (wouldLikeNumber === true) {
    var canEnterNumber = Number(prompt("Enter a number here:"));
    if (canEnterNumber % 2 === 0) {
        var oddIs = alert("Your number is odd!");
    }
    if (canEnterNumber == Number && canEnterNumber % 1 == 0) {
        var positiveIs = alert("Your number is positively cool!");
    }
    // if (numberIsNegative) {
    //     var negativeIs = alert("Your number is a negative nancy........");
    // } else {
    //     var noNumberHere = alert("Bummer! You did not enter a number");
    // }
}

//
// function numberFun(anyNumber) {
//     if (confirmMessage === true) {
//
//         anyNumber = (prompt("Please enter a number."));
//
//         if (isNaN(anyNumber)) {
//             alert("You did not enter a number!")
//         } else if (Number(anyNumber)) {
//             alert("Is your number even? " + isEven(anyNumber));
//
//             if (anyNumber) {
//                 alert(("Your number + 100 is: ") + (Number(anyNumber) + 100));
//
//
//                 if (Number(anyNumber < 0)) {
//                     alert("Your number is a Negative Nelly....");
//                 }
//             }
//         } else {
//             alert("No problem, have a good day!");
//         }
//     }
// }
// console.log(numberFun());

// =====notes====

// modulus if number can go into the number evenly it is even if remainder it is odd


// 1.confirm / would like to enter number?
// 2. if true, prompt for number
// 3.
// - weather even or odd
// -what number + 100 ===
// - if negative or positive
// 4. alert if not a number - without any previous alert info
// 5. refactor inside a function


// simple is even function!!

// var isEven = function(someNumber){
//     return (someNumber%2 == 0) ? true : false;
// };
// console.log(isEven(97));
// //
// alert(isEven(64)); // Alerts "true".
//
// alert(isEven(97)); // Alerts "false".



// function canHasNumber(number){
//     // var discountPrice;
//     switch(number) {
//         case ():
//              = totalAmount;
//             break;
//         case():
//
//              = ;
//             break;
//         case ():
//             = ;
//             break;
//         case ():
//              = ;
//             break;
//         case ():
//              = ;
//             break;
//         case ():
//              = ;
//             break;
//         default:
//             alert("");
//             break;
//     }
//     return ;
// }


// end question one...
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// ============================2. work and answer====================================


// function colorOpinions (){
//     var colorPrompt = prompt("What is your favorite color?");
//         if(colorPrompt === "blue"){
//             return("Blue is the BEST.. but don't tell the other colors....");
//         }else if(colorPrompt === "red"){
//             return("Red? Yikes..");
//         } else if(colorPrompt === "cyan"){
//             return("Hmmm, Cyan, someone with taste I see.");
//         }
//          else{
//             return("The color you entered is undefined, but i'm sure it's nice!");
//          }
// }
// console.log(colorOpinions());

// rewritten as switch statement=========


// function colorOpinions (color) {
//     var colorPrompt = prompt("What is your favorite color?");
//
//     switch (colorPrompt) {
//         case "blue":
//             alert("Blue is the BEST.. but don't tell the other colors....");
//             break;
//         case "red":
//             alert("Red? Yikes..");
//             break;
//         case "cyan":
//             alert("Hmmm, Cyan, someone with taste I see.");
//             break;
//         default:
//             alert("The color you entered is undefined, but i'm sure it's nice!");
//             break;
//     }
//
// }
// console.log(colorOpinions());




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// =====function to just see the random number===


// var colorsRandom  = colors[Math.floor(Math.random() * colors.length)];
//
// function randomColorChoice(colors){
//    return randomColor;
//
// }
// console.log(randomColorChoice());

// function colorOpinions (color){
//     colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     if(randomColor === "blue"){
//         return("Blue is the BEST.. but don't tell the other colors....");
//     }else if(randomColor === "red"){
//         return("Red? Yikes..");
//     } else if(randomColor === "cyan"){
//         return("Hmmm, Cyan, someone with taste I see.");
//     }
//     else{
//         return((randomColor) + ":  The color you entered is undefined, but i'm sure it's nice!");
//     }
// }
// console.log(colorOpinions());


// ============================3. work and answer====================================




/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function colorOpinions () {
//     colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     switch (randomColor) {
//         case "blue":
//             return("Blue is the BEST.. but don't tell the other colors....");
//             break;
//         case "red":
//             return("Red? Yikes..");
//             break;
//         case "indigo":
//             return("Hmmm, Indigo, someone with taste I see.");
//             break;
//         default:
//             return((randomColor) + ":  The color you entered is undefined, but i'm sure it's nice!");
//      }
//
// }


// console.log(colorOpinions());

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// ============================4. work and answer====================================


// function colorOpinions () {
//     var colorPrompt = prompt("What is your favorite color?");
//
//     switch (colorPrompt) {
//         case "blue":
//             alert("Blue is the BEST.. but don't tell the other colors....");
//             break;
//         case "red":
//             alert("Red? Yikes..");
//             break;
//         case "cyan":
//             alert("Hmmm, Cyan, someone with taste I see.");
//             break;
//         default:
//             alert("The color you entered is undefined, but i'm sure it's nice!");
//             break;
//     }
//
// }
// console.log(colorOpinions());

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// Number(prompt("What a coincidence, that's my favorite!"));
// return discountPrice;



// ============================5. work and answer====================================



//
// function calculateTotal(luckyNumber, totalAmount){
//     var discountPrice;
//     switch(luckyNumber) {
//         case 0:
//             discountPrice = totalAmount;
//             break;
//         case 1:
//
//             discountPrice = (totalAmount) - (totalAmount * .10);
//             break;
//         case 2:
//             discountPrice = (totalAmount) - (totalAmount * .25);
//             break;
//         case 3:
//             discountPrice = (totalAmount) - (totalAmount * .35);
//             break;
//         case 4:
//             discountPrice = (totalAmount) - (totalAmount * .50);
//             break;
//         case 5:
//             discountPrice = 0;
//             break;
//         default:
//             alert("Discount unavailable at this time");
//             break;
//     }
//     return discountPrice;
// }
//
// console.log(calculateTotal(2,100));
// // //




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
// ============================6. work and answer====================================



function calculateTotal(luckyNumber, totalAmount){
    luckyNumber = Math.floor(Math.random() * 6);
    var totalAmount = Number(prompt("What was your bill amount?"));
    switch(luckyNumber) {
        case 1:
            alert("Congratulations your lucky number is 1!");
            alert("Your price before discount is $" + (totalAmount));
            alert("Your total price after discount is $" + ((totalAmount) - (totalAmount * .10)) );
            return;
        case 2:
            alert("Congratulations your lucky number is 2!");
            alert("Your price before discount is $" + (totalAmount));
            alert("Your total price after discount is $" + ((totalAmount) - (totalAmount * .25)) );
            return;
        case 3:
            alert("Congratulations your lucky number is 3!");
            alert("Your price before discount is $" + totalAmount);
            alert("Your total price after discount is $" + ((totalAmount) - (totalAmount * .35)) );
            return;
        case 4:
            alert("Congratulations your lucky number is 4!");
            alert("Your price before discount is $" + totalAmount);
            alert("Your total price after discount is $" + ((totalAmount) - (totalAmount * .50)) );
            return;
        case 5:
            alert("Congratulations your lucky number is 5!");
            alert("Your price before discount is $" + totalAmount + "Your total price after discount is  $" + ((totalAmount) - (totalAmount * 0)));
            // alert("Your total price after discount is  $" + ((totalAmount) - (totalAmount * 0)) );
            return;
        default:
            alert("Discounts per a lucky number are currently unavailable");
            return;
    }
}

console.log(calculateTotal());
