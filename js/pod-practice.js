

var x = new Array(3);

function mysteryFunc (x){
    // x = '152';
return (x.split(0, 1)) * (x.split(1, 2)) * (x.split(2, 2));
}

console.log(mysteryFunc(152));