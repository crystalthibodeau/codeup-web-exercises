// var make = "Toyota";
// var model = "Sienna";
// var year = "2009";
// var isTitled = true;
// var carGoGoGo = function(key){
//     if(key == "correct"){
//         console.log("vroom");
//     }else{
//         console.log(".....")
//     }
// };


var car = {
    make: "Toyota",
    model: "Sienna",
    year: 2009 ,
    isTitled: true,
    options: ["4 wheel drive", "heated seats", "leather interrior"],
    carGoGoGo : function(key){
        if(key == "key"){
            console.log("vroom");
        }else{
            console.log(".....")
        }
    }
};
//
// console.log("car was made in "+ car.year);
// console.log("car has the following options:" + car.options);
// car.options.forEach(function(option){
//     console.log(option)
// });
// car.carGoGoGo("key");
//
//
//
// var myCar = {
//     make : "Kia",
//     model : "Sportage",
//     year : "2012",
//     stereo : function(on){
//         if (on === "on"){
//             console.log("Max Volume On");
//         }else {
//             console.log("bad day, eh?.. Music off");
//         }
//     },
//     options : ["A snazzy steering wheel cover", "AWD", "an amazing turn radius"],
//     isReliable : true,
//     comfort: function(option){
//         if(myCar.options.includes(option))
//             console.log("Yes, it has " + option + "!");
//         else
//             console.log("Hmm not sure on that one ");
//     }
//
// };
//
// console.log(myCar.make);
// console.log(myCar.model);
// console.log(myCar.make, myCar.model, myCar.year);
// myCar.options.forEach(function(option){
//     console.log(option);
// });
// myCar.stereo("on");
// myCar.comfort("sunroof");
//
//
// var truck = new Object();
// truck.make = "Tesla";
// truck.model = "CyberTruck";
// truck.year = 2022;
// // truck.GoGoG = function(){
// //     console.log("VROOM");
// // };
//
// console.log(truck);
//
// console.log(truck['model']);

// var cars = [
//     car,
//     {
//         make : "Dodge",
//         model: "Challenger",
//         year: 2015,
//         report: function(){
//             console.log(this.year + ' ' + this.make + " " + this.model);
//         }
//     },
//     {
//         make: "Ford",
//         model : "Shelby GT 500",
//         year : "1969",
//         report: function(){
//             console.log(this.year + ' ' + this.make + " " + this.model);
//         }
//     },
//     {
//        make : "Cadillac",
//        model: "Escalade",
//        year : "2019",
//         report: function(){
//            console.log(this.year + ' ' + this.make + " " + this.model);
//         }
//     }
//
// ];
// car.report = function () {
//     console.log(this.year + ' ' + this.make + " " + this.model);
// };
// cars.forEach(function(car){
//     car.report();
// });

// var dogs = [
//     {
//         breed: "Beagle",
//         bark: "Rooawf, Rooawf, Rooawf!!",
//         size: "Medium",
//         report: function(){
//             console.log(this.breed + ' : ' + this.bark + ' : ' + this.size);
//         }
// },
//     {breed: "Black Lab",
//         bark: "Rooof, Rooof",
//         size: "Medium to Large",
//         report: function(){
//             console.log(this.breed + ' : ' + this.bark + ' : ' + this.size);
//         }
//     },
//
//     {breed: "Doberman",
//         bark: "Arrh, Arrh!",
//         size: "Large",
//         report: function(){
//             console.log(this.breed + ' : ' + this.bark + ' : ' + this.size);
//         }
//     },
// ];
//
// dogs.forEach(function(dog){
//     dog.report();
// });
// dogs.report = function () {
//     console.log(this.breed + ' : ' + this.bark + " : " + this.size);
// };