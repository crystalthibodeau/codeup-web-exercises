

// var x = [];

function mysteryFunc (x){
   // x= [];
  console.log(x);
  var newX = (""+x).split('');
  console.log(newX);
    return ((newX[0]) * (newX[1]) * (newX[2]));
}

console.log(mysteryFunc(152));

