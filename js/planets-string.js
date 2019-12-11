console.log("Hello from planets-string!");

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     //attached to file name split-join.html

     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
// console.log(planetsArray);
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // var planetsString = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";

// var planetsString =  "<ul><li>Mercury</li>|<li>Venus</li>|<li>Earth</li>|<li>Mars</li>|<li>Jupiter</li>|<li>Saturn</li>|<li>Uranus</li>|<li>Neptune</li></ul>";
//
// var planetsList = "<ul>";
// planetsArray.forEach(function(planet){
//     planetsList += "<li>" + planet + "</li>";
// });
// planetsList += "</ul>";
//
//     console.log(planetsList);
// document.getElementById("planets").innerHTML = planetsList;

})();