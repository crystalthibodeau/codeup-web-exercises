
// var pet1 = "Toby";
// var pet2 = "Princess";
// var pet3 = "Samson";
// var pet4 = "Jill";
// var pet5 = "Bubbles";
// var pet5 = "Malu";



// var pets = [];

//
// pets[0] = "Toby";
// pets[1] = "Princess";
// pets[2] = "Samson";
// pets[3] = "Jill";
// pets[4] = "Bubbles";
// pets[5] = "Malu";
// pets[6] = 'Lily';

var pets = ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu",];


// for loop example .....

// for(var i = 0 ; i < pets.length; i++){
//     console.log(pets[i]);
// }


// while loop example.....

var i = 0;
while(i < pets.length){
    console.log(pets[i]);
    i++;
}


// adding lily to pets
// length value is 1 greater than index value

pets[pets.length] = 'lily';
console.log(pets[pets.length -1]);
console.log("-----");

// adding rosy to pets....

pets[10] = 'Rosy';
// element/index/array var name i.e(pet, i, pets)

pets.forEach(function(pet, i, pets){
    console.log(pet); // dont need pets in the above function when only calling pets singular
    // console.log(pets[i]); //works the same way as the above line of code
});
console.log("-----");

var fruit = ['apple','orange','banana'];
// // //
console.log(fruit);
console.log("-----");
// //
// //fruit[fruit.length]= 'pear'; === fruit.push('pear');
//
// // fruit.push('pear'); //----> returns string length inside of a console -->
// sometimes console will reflect wrong because of javascript running speed?
//
fruit.push('mango');
fruit.push('kiwi');
fruit.push('grapes');
fruit.push('jackfruit',"dragonfruit"); //if[] is placed around the string items used in push it inserts an array into the existing array
console.log(fruit);
console.log("-----");
console.log(fruit.shift()); //---> shift returns what is removed
//---->(shift == shifts things over to the left index)
console.log("-----");
console.log(fruit);
console.log("-----");
fruit.unshift('strawberry');
console.log(fruit);
console.log("-----");
console.log(fruit.pop());//---> pop returns what is removed
console.log("-----");
console.log(fruit);
console.log("-----");
console.log(fruit.indexOf('mango')); //returns index as a number --->
console.log("-----");
console.log(fruit[4]); //----> returns item at index value
console.log("-----");
console.log(fruit[fruit.indexOf('mango')]); //----> undifined if not found, returned NOT IN STRING if found
console.log("-----");
fruit.unshift('apple');
console.log(fruit);
console.log("-----");
fruit.push('apple');
console.log(fruit);
console.log("-----");
console.log(fruit.lastIndexOf('apple')); //-->returns index#

//
console.log("-----");
var fruit1thru3 = fruit.slice(0,3);
console.log(fruit1thru3);
console.log("-----");
var fruit6thru8 = fruit.slice(6,8);
console.log(fruit6thru8);

// push/pop - the end
// shift/unshift - the beginning


// var thingsILike = ['muisc', 'painting', 'road trips'];
// //
// //
// console.log(thingsILike);
// thingsILike.push('cooking');
// console.log(thingsILike);
// thingsILike.shift();
// console.log(thingsILike);
// thingsILike.unshift('music');
// console.log(thingsILike);
// console.log(thingsILike.push('drawing', 'coffee', 'being prepared', 'the smell of rain')); //---> index length of array
// console.log(thingsILike);
// console.log(thingsILike[5]);
// console.log(thingsILike[thingsILike.indexOf('painting')]);
// console.log(thingsILike.length);
// thingsILike.pop();
// console.log(thingsILike);
// thingsILike.unshift('smelling the rain');
// console.log(thingsILike);
//
// console.log(thingsILike.length);
// console.log(thingsILike.length - 1);
//
//
// console.log(thingsILike.join(", "));
// console.log(thingsILike);
// console.log(thingsILike.join(""));
// console.log(thingsILike.join(' & '));


// personal example 1 ===== not working
//
// var sentence = "this is my test sentence" ;
// var words = sentence.split(' ');
// console.log(words);
//
// console.log(words.forEach(function(words){
//     // var firstLetter = word.split().unshift();
// for(var i = 0; i <words.length; i++) {
//
//
//     // console.log(words);
//     var letters = ("" + words).split('');
//     var firstLetters = letters[i].toUpperCase();
//     console.log(firstLetters);
//     // return letters[i].join(firstLetters);
//
// }
// }));
// // personal example 2=========not working but closer maybe?!
//
// var sentence;
// var letters;
// // splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
//
//
// function capitalLetter (sentence){
//     // x= [];
//     // sentence = "this is my test sentence" ;
//     console.log(sentence);
//     var words = (sentence.toLowerCase()).split(' ');
//
//     console.log(words);
//     var letters = (sentence.toLowerCase()).split('');
//     console.log(letters);
//     for (var i = 0; i < letters.length; i++) {
// //
//         letters = letters[i].toUpperCase();
//         console.log(letters);
//     }
// //
// // var newString = (""+letters.join(" "));
// // console.log(newString);
//
//     // return letters.join(' ');
//
// }
//
// console.log(capitalLetter("this is my test sentence"));


// //class example==================


// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     console.log(splitStr);
//     // console.log(splitStr.length);
//
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     // Directly return the joined string
//     return splitStr.join(' ');
// }
//
// console.log(titleCase("the quick brown fox jumped over the lazy dog"));


// mathew example!=========

// var sentence = "The quick brown fox jumps over the lazy dog";
// console.log(sentence);
// var words = sentence.split(" ");
// for (var i = 0;i<words.length; i++) {
//     // capitalize first letter
//     var word = words[i];
//     // var firstLetter = word.split()[0];
//     var letters = word.split();
//     var capitalFirstLetter = letters[0].toUpperCase();
//     var capitalizedWord = "";
//     capitalizedWord += capitalFirstLetter;
//     for (var j=1; j<words.length; j++){
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//         capitalizedWord += letters[j];
//     }
// }
// // words.reverse();
// sentence = words.join(" ");
// console.log(sentence);