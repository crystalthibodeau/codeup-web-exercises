(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (radius) {
            var area;
            // TODO: complete this method
            // hint: area = pi * radius^2
            return area = Math.PI * (this.radius * this.radius); //Math.pow(this.radius, 2)

            // return; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding === true) {
               console.log("Circle information rounded to the nearest whole number is: " + Math.round(this.getArea())); //this vs circle
            }
            else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea(this.radius));
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);

    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number is: ");
    circle.logInfo(true);
})();