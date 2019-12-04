"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// if(isAdmin){
//     //show admin navbar
//     //showAdminNavbar() -- functiion?
// }

//TODO Together: Send a 20% off coupon if its users birthday

// if(isBirthday){
//     // send coupon offer OR
//        sendBirthdayEmail -- function
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;
// if(isRainy){
//     alert("it's raining!");
// }
//
// if(isRainy === true) {
//     alert("it's raining!");
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 100; //Number(prompt("How much is the item cost?"));
// var currentBalance = 200; // Number(prompt("How much money is in your account?"));
//
// if (itemCost <= currentBalance){
//     alert("you have enough money!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var currentAmountOfLives = 0;
// if(currentAmountOfLives === 0){
//     alert("Sorry, GAME OVER!");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
//
//
// var weather = "snowing";
// if (weather === "snowing"){
//     alert("It's snowing!");
// }


// var isSnowing = true;
// if (isSnowing){
//     alert("It's snowing!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10


// var numberInput = 11;
//
// if (numberInput > 10){
//     alert("True!");
// }



//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = false; //true;
// if (isAdmin){
//     //show admin navbar
//     alert("user is admin");
// } else {
//     //show other/regular navbar -- function
//     alert("user is NOT an admin");
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"

// var isRainy = false; // true;
// if(isRainy){
//     alert("It's raining!");
// } else {
//     alert("Have a nice day with no rainy traffic!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//
// var numberOfLives = 1;
// if(numberOfLives === 0){
//     alert("Sorry, GAME OVER!");
// } else {
//     alert("Next Level Unlocked!  " + numberOfLives + ": Lives remaining...")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
//
// var weather = "sunny"; //"rainy"
// if(weather=== "snowing"){
//     alert("It's snowing!");
// } else {
//     alert("Check back later for more details.");
// }


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
//
//
// var numberInput = 9;
//
// if (numberInput > 10){
//     alert("True!");
// } else {
//     alert("the entered number is less than 10");
// }


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// function checkIfGameIsOver (numberOfLives) {
// if(numberOfLives === 0){
//     alert("Sorry, GAME OVER!");
//     // return("Sorry, GAME OVER!");
// } else {
//     alert("Next Level Unlocked!  " + numberOfLives + ": Lives remaining...");
//     // return("Next Level Unlocked!  " + numberOfLives + ": Lives remaining...");
// }
// }
// // console.log(checkIfGameIsOver(1));
// checkIfGameIsOver(0);

// start of class example function .....

// function checkIfGameIsOver(numberOfLives){
//
//     var returnMessage;
//
//         if(numberOfLives === 0){
//             returnMessage = "sorry, game is over.";
//         } else {
//             returnMessage = "Next level accomplished.";
//         }
//         return returnMessage;
// }
// console.log(checkIfGameIsOver(2));


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
//
//

// SHOULD WE DELETE STUFF EXAMPLE
//
// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
// console.log("the value of the confirm is: " +weShouldDeleteStuff);
// // ok === true
// //cancel === false
//
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("deleting everything...")
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases


// var weather = "cloudy";
// if(weather === "snowing"){
//     alert("It's snowing!");
// } else if (weather === "raining"){
//     alert("It's raining!");
// }else if (weather === "sunny"){
//     alert("It's sunny!");
// } else {
//     alert ("Weather is: " + weather + " Have a nice day!");
// }

// as a function...


//
// function checkWeather(weather){
//     if(weather === "snowing"){
//         alert("It's snowing!");
//     } else if (weather === "raining"){
//         alert("Weather is: " + weather + ". It's raining!");
//     }else if (weather === "sunny"){
//         alert("Weather is: " + weather + ". It's sunny!");
//     } else {
//         alert ("Weather is: " + weather + ". Have a nice day!");
//     }
// }
// checkWeather("cloudy");
//

//TODO Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE
//
// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

//
// var trafficLightColor;
// function trafficGo(trafficLightColor){
//     if(trafficLightColor === "red"){
//         // return("Stop..*SIGH*");
//         alert("Stop..*SIGH*");
//     } else if(trafficLightColor === "yellow"){
//         // return("Better speed up, or slowwww down!");
//         alert("Better speed up, or slowwww down!");
//     } else if(trafficLightColor === "green"){
//         // return("Smooth sailing");
//         alert("Smooth sailing");
//     }else{
//         // return("Are you even driving?");
//         alert("Are you even driving?");
//     }
// }
// trafficGo("hello");



// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.

// && !hasPermit
// alternate way to right && hasPermit === false

//
// var userAge = 17;
// var hasPermit = true;
//
//
// if(userAge < 15){
//     alert("Sorry you are not eligible.");
// }else {
//     if(userAge===15){
//         alert("You are eligible for a permit");
//     } else if (userAge >= 16 && hasPermit){
//         alert("You are eligible for a license");
//     }else if(userAge >= 16 && hasPermit === false){
//         alert("Sorry, you'll need to get a permit first");
//     }else {
//         alert("Please call (444)-444-4444 for more info");
//     }
// }





// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);
//
// var theme = "black";
// var backgroundColor = (theme) ? "color black for background" : "background color white";
// console.log(backgroundColor);
//
// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message);

// ? is if block : second half is else block;
//example

// if/else

// var isAdmin = true;
// if(isAdmin){
//     showAdminNavbar();
// }else{
//     showRegularNavBar();
// }


// ternary example
// (isAdmin) ? showAdminNavbar() : showRegularNavBar();

//TODO: Refactor the following conditional as a ternary
//
// var weather = "rainy";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }


// class example

// var weatherMessage = (weather === "rainy") ? "It's raining" : "Have a good day";
// console.log(weatherMessage);
//
// //WRITE YOUR TERNARY STATEMENT HERE!
// var weatherMessage = (weather === "rainy") ? "It's raining!" :  "Have a nice day!" ;
// console.log(weatherMessage);


// =============== SWITCH STATEMENT ================
//TODO Together:



// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

// var weather = "cloudy";

// switch (weather){
//     case "rainy":
//         alert("It's raining");
//         break;
//     case "sunny":
//         alert("It's sunny");
//         break;
//     case "snow":
//         alert("It's snowing");
//         break;
//     default:
//         alert("Have a nice day");
//         break;
// }
//
// function checkWeather(weather){
//     var weatherMessage;
//
//     switch (weather){
//         case "rainy":
//             weatherMessage = ("It's raining");
//             break;
//         case "sunny":
//             weatherMessage = ("It's sunny");
//             break;
//         case "snow":
//             weatherMessage = ("It's snowing");
//             break;
//         default:
//             weatherMessage = ("Have a nice day");
//             break;
//     }
//     return weatherMessage;
// }
// console.log(checkWeather("sunny"));

//TODO: Rewrite the intersection function from earlier as a switch statement.

//
// var trafficLightColor = "green";
//
// switch(trafficLightColor){
//     case "red":
//         alert("Stop..*SIGH*");
//         break;
//     case "yellow":
//         alert("Better speed up, or slowwww down!");
//         break;
//     case "green":
//         alert("Smooth sailing ahead");
//         break;
//     default:
//         alert("Are you even driving?");
//         break;
// }


// as a class.....
//
// function checkTrafficLight(trafficLight){
//     var colorMessage;
//     switch(trafficLight){
//         case "green":
//             colorMessage= "keep going";
//             break;
//         case "yellow":
//             colorMessage= "slow down";
//             break;
//         case "red":
//             colorMessage= "stop";
//             break;
//             default:
//                 colorMessage = "proceed with caution";
//                 break;
//     }
//     return colorMessage;
// }
//
// console.log(checkTrafficLight("green"));

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

