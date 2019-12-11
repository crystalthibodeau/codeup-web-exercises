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

console.log("car was made in "+ car.year);
console.log("car has the following options:" + car.options);
car.options.forEach(function(option){
    console.log(option)
});
car.carGoGoGo("key");



var myCar = {
    make : "Kia",
    model : "Sportage",
    year : "2012",
    stereo : function(on){
        if (on === "on"){
            console.log("Max Volume On");
        }else {
            console.log("bad day, eh?.. Music off");
        }
    },
    options : ["Snazzy steering wheel cover", "AWD", "Amazing turn radius"],
    isReliable : true,

};

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.make, myCar.model, myCar.year);
myCar.options.forEach(function(option){
    console.log(option);
});
myCar.stereo("on");