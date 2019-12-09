

// var x = [];

function mysteryFunc (x){
   // x= [];
  // console.log(x);
  var newX = (""+x).split('');
  // console.log(newX);

    var sum = ((newX[0]) * (newX[1]) * (newX[2]));
     return sum;
}

console.log(mysteryFunc(152));

// 19 =nan
