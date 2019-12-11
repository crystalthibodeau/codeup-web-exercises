

var x = [];

function mysteryFunc (x){
   // x= [];
  // console.log(x);
  var newX = (""+x).split('');
  // console.log(newX);



    var sum = 1;
    for(var i = 0; i <= newX.length -1; i++){
        sum *= (newX[i]);
    }



    // var sum = ((newX[0]) * (newX[1]) * (newX[2]));
     return sum;
}
//
//
//
//
// console.log(mysteryFunc(152));
// console.log(mysteryFunc(133));
// console.log(mysteryFunc(19));
// console.log(mysteryFunc(832));
// console.log(mysteryFunc(4321));
// console.log(mysteryFunc(66778));




function sumAll(x){
    var sum;
    var newX = (""+x).split('');
    console.log(newX);
}


console.log(sumAll(152));
console.log(sumAll(133));
console.log(sumAll(19));
console.log(sumAll(832));
console.log(sumAll(4321));
console.log(sumAll(66778));
// 19 =nan

// i <= newX.length -1 === i < .length  ====================================================


