/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Crystal';
const email = 'crystalthibodeau@yahoo.com';
const languages = ["CSS","HTML","Javascript","Jquery","Bootstrap"];

// TODO: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});

// console.log(users);
// for( const user of users){
//     console.log(user);
// }

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach(function(user) {
    return emails.push(user.email);
});
users.forEach(function(user) {
    return names.push(user.name);
});

// for( const user of users){
//     console.log(user.email);
// }
// const userInfo = user => {
//     for(const user of users) {
//         console.log(user.email);
//     }
// };
// userInfo();
//
// const userName = user => {
//     for(const user of users){
//         console.log(user.name);
// }
// };
// userName();

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition

    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

    const {name, email, languages} = user;
    // console.log(name);
    // TODO: rewrite the assignment below to use template strings

    developers.push(`${name}'s email is ${email}
${name} knows ${languages.join(', ')}`);

    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
});

// console.log(developers);
// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

    for(let developer of developers){
        list += `<li> ${developer} </li>`;
        const body = document.getElementById('body');
        body.innerHTML = list;
        console.log(developer);
    }

    // TODO: rewrite the assignment below to use template strings
    // list += '<li>' + developer + '</li>';
// });

list += '</ul>';





    // day number two map and filter=============================





var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14",
        isFavorite : "true"
    }
];

let hamsterNames = hamsters.map((hamster) => {
    return hamster.name;
});
console.log(hamsterNames);


let furColors1 = hamsters.map((hamster) => {
    return hamster.fur
    }

);
console.log(furColors1);

let furColors = hamsters.map(hamster => hamster.fur);
console.log(furColors);

let furColors2 = [];
    hamsters.map(hamster => {
    hamster.fur.map(color => furColors2.push(color)) ;
});
console.log(furColors2);

let hamsterFavorite = hamsters.filter(hamster => hamster.isFavorite);
let hamsterFavoriteNames = hamsters.filter(hamster => hamster.isFavorite).map(hamster => hamster.name);
console.log(hamsterFavorite);
console.log(hamsterFavoriteNames);

let hamsterFavoriteNamesAndGender = hamsters.filter(hamster => hamster.isFavorite).map(hamster =>
    { return {
       name: hamster.name,
        gender: hamster.gender
    }
    }
);
console.log(hamsterFavoriteNamesAndGender);

let hamsterHeightTotal = hamsters.reduce(
    (hamsterStack, hamster) => {return hamsterStack + hamster.heightInMM; }, 0
);

console.log(hamsterHeightTotal);
let avgHeight = hamsterHeightTotal / hamsters.length;

console.log(avgHeight);

let hamsterStacker = 0;
for(let hamster of hamsters){
    hamsterStacker += hamster.heightInMM;
}
console.log(hamsterStacker);


function countWords(sentence, counts = {}) {
    const words = sentence.split(' ');
    const wordCountObject = words.reduce((wordCounts, word) => {
    if(typeof wordCounts[word] === 'undefined'){
        wordCounts[word] = 1;
    }else{
        wordCounts[words] += 1;
    }
    return wordCounts;
}, counts);
    return wordCountObject;
}

console.log(countWords('Mary had a little lamb, little lamb, little lamb'));
