"use strict";

// console.log("Hello from external JavaScript");


// alert('Welcome to my Website!');
//
// var userFavColor = prompt("What is your favorite color?");
//
// console.log('The user entered: ' + userFavColor);
//
// // alert("Great, " + userFavColor + " is my favorite color too!");
//
// // class example
// var alertMessageFavColor = "Great, " + userFavColor + " is my favorite color too!";
// alert(alertMessageFavColor);




// start of movie question answers here


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
// (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to
// like it). If price for a movie per day is $3, how much will you have to pay?


// start of class example for movie question

// 1. ask user rental fee -prompt and variable
// 2. ask how many days .mermaid. -- prompt and variable
// 3. ask how many days .brother bear.  -- prompt and variable
// 4. ask how many days .hercules. -- prompt and variable
// 5. calculate total price * number of days
// 6. alert the total price


// var dailyRentalRate = Number(prompt("How much is the daily rental rate?"));
// // var dailyRentalRate = parseInt(prompt("How much is the daily rental rate?"));
// var mermaidDaysRented = Number(prompt("How many days would you like to rent 'The Little Mermaid'?"));
// var brotherBearRented = Number(prompt("How many days would you like to rent 'Brother Bear'?"));
// var herculesRented = Number(prompt("How many days would you like to rent 'Hercules'?"));
// var totalCost = (mermaidDaysRented + brotherBearRented + herculesRented) * dailyRentalRate;
// var alertMsgRental = ("You owe $" + totalCost );
// alert(alertMsgRental);

// end of class example


// start of personal response for movie question


// little mermaid = 3(days) * 3(price per day)
// brother bear = 5(days) * 3 (price per day)
// hercules = 1(days) * 3(price per day)


//
// var littleMermaidDays = Number(prompt('You have selected "The Little Mermaid", how many days would you like to rent this movie?'));
//
// console.log("user entered " + littleMermaidDays);
//
// var brotherBearDays = Number(prompt('You have selected "Brother Bear", how many days would you like to rent this movie?'));
//
// console.log("user entered " + brotherBearDays);
//
// var herculesDays = Number(prompt('You have selected "Hercules", how many days would you like to rent this movie?'));
//
// var costPerDay = Number(prompt("How much does a single movie cost to rent per day?"));
//
// console.log("user entered " + herculesDays);
//
// var totalCost = (herculesDays + brotherBearDays + littleMermaidDays) * costPerDay;
//
// console.log(totalCost);
//
// alert('Your total cost is $' + totalCost + ' for selected items.');


// end of movie question here


// start of paycheck question here


// start of class walk through response for paycheck question

// var googleRate = Number(prompt("What is your google rate per hour?"));
// var amazonRate = Number(prompt("What is your amazon rate per hour?"));
// var facebookRate = Number(prompt("What is your facebook rate per hour?"));
//
// var googleHours = Number(prompt("How many hours did you work at google?"));
// var amazonHours = Number(prompt("How many hours did you work at amazon?"));
// var facebookHours = Number(prompt("How many hours did you work at facebook?"));
//
// var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);
// var alertPay = "Your total pay is: $" + totalPay;
// alert(alertPay);


// end of class walk through response and start of personal response


// var googleHours = Number(prompt('How many hours did you work for Google this week?'));
// var googlePay =  Number(prompt('How much do you make an hourly for Google?'));
// var amazonHours = Number(prompt('How many hours did you work for Amazon this week?'));
// var amazonPay = Number(prompt('How much do you make an hourly for Amazon?'));
// var facebookHours =  Number(prompt('How many hours did you work for Facebook this week?'));
// var facebookPay = Number(prompt('How much do you make an hourly for Facebook?'));
// var totalPayCheck = (googleHours * googlePay) + (amazonHours * amazonPay) + (facebookHours * facebookPay);
// alert('Your paycheck before taxes is $' + totalPayCheck);



// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict
// with her current schedule.

// start of class schedule question
// start of class walk through response
//
// var classIsNotFull = confirm("Class is not full");
// var noScheduleConflicts = confirm("schedules do not conflict");
//
// var studentEnrolled = classIsNotFull && noScheduleConflicts;
// console.log(studentEnrolled);
// // console.log("class not full " + classIsNotFull);
// // console.log("schedules do not conflict " + noScheduleConflicts);
//
// alert("Student can enroll: " + studentEnrolled);
//
// // end of class responses, start of personal response




// var hasNoClass = confirm("Select 'OK' if there is no class conflict at this time.");
//     if (hasNoClass) {
//         var classSize = Number(prompt('What is current class size?'));
//         var maxClassSize = Number(prompt('What is the maximum class size?'));
//         if( classSize < maxClassSize) {
//             alert("Successfully enrolled in class.");
//         } else{
//             alert("Class is too full for enrollment.");
//         }
//     } else {
//         alert("Class conflict for this time slot.");
// }


// start of coupon question here


// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium
// members do not need to buy a specific amount of products.


// start of class walk through

// var numberOfItems = Number(prompt("How many items in cart?")); //Number
// var offerValid = confirm("Is the offer valid?"); //boolean - true - false
// var isPremium = confirm("Does customer have premium membership?"); //boolean
// var discountApplied = offerValid && (isPremium || numberOfItems > 2);
// alert("Can use discount: " + discountApplied);

// end of class walk through start of personal response

// var moreThanTwo;
// var isValid = confirm("Select 'OK' to continue if coupon offer is valid.");
// console.log(isValid);
// if (isValid) {
//     var hasPremium = confirm("Select 'OK' to continue if customer has Premium membership");
//     if(hasPremium) {
//         alert("Coupon has been applied.");
//         console.log(hasPremium);
//     }if (!hasPremium) {
//         moreThanTwo = Number(prompt('How many items does the customer have?'));
//     } if (moreThanTwo > 2) {
//         alert("Coupon has been applied.");
//     }
// } else {
//     alert("Coupon does not validate.");
// }


