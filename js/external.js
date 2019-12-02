// console.log("Hello from external JavaScript");

// alert('Welcome to my Website!');
// var favColor = prompt("What is your favorite color?");
// console.log('The user entered: ' + favColor);
// alert("Great, " + favColor + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
// (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to
// like it). If price for a movie per day is $3, how much will you have to pay?

// var littleMermaidDays = Number(prompt('You have selected "The Little Mermaid" to rent at a price of $3 a day, how many days would you like to rent this movie?'));

// console.log("user entered " + littleMermaidDays);

// var brotherBearDays = Number(prompt('You have selected "Brother Bear" to rent at a price of $3 a day, how many days would you like to rent this movie?'));

// console.log("user entered " + brotherBearDays);

// var herculesDays = Number(prompt('You have selected "Hercules" to rent at a price of $3 a day, how many days would you like to rent this movie?'));

// console.log("user entered " + herculesDays);

// var totalCost = (herculesDays + brotherBearDays + littleMermaidDays) * 3;

// console.log(totalCost);

// alert('Your total cost is $' + totalCost + ' for selected items.');
//
// var googleHours = Number(prompt('How many hours did you work for Google this week?'));
// var googlePay =  Number(prompt('How much do you make an hour for Google?'));
// var amazonHours = Number(prompt('How many hours did you work for Amazon this week?'));
// var amazonPay = Number(prompt('How much do you make an hour for Amazon?'));
// var facebookHours =  Number(prompt('How many hours did you work for Facebook this week?'));
// var facebookPay = Number(prompt('How much do you make an hour for Facebook?'));
// var totalPayCheck = (googleHours * googlePay) + (amazonHours * amazonPay) + (facebookHours * facebookPay);
// alert('Your paycheck before taxes is $' + totalPayCheck);



// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.


// var hasClass = confirm("Select 'OK' if no class conflict at this time.");
// if (hasClass) {
//     var classSize = Number(prompt('What is current class size?'));
//     var maxClassSize = Number(prompt('What is the maximum class size?'));
//     if( classSize < maxClassSize) {
//         alert("Successfully enrolled in class.");
//     } else{
//         alert("Class is too full for enrollment.");
//     }
// } else {
// alert("Class conflict for this time slot.");
// }

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var moreThanTwo;
var isValid = confirm("Select 'OK' to continue if coupon offer is valid.");
if (isValid) {
    var hasPremium = confirm("Select 'OK' to continue if customer has Premium membership");

    if(!hasPremium) {
        moreThanTwo  = Number(prompt('How many items does the customer have?'));
    }
    if(moreThanTwo > 2 || hasPremium) {
        alert("Coupon has been applied.");
    }  else{
        alert("Coupon does not meet requirements to validate.");
    }

} else{
    alert("Coupon does not meet requirements to validate.");
}



