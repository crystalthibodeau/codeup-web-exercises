const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let userObjects = users.filter(user => user.languages.length >= 3);

console.log(userObjects);

// Use .map to create an array of strings where each element is a user's email address

// let emails = [];
// for(let user of users){
//     emails.push(user.email);
// }
let emails = users.map(user => user.email);

console.log(emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let experience = users.reduce(
    (stack, user) => {return stack + user.yearsOfExperience; }, 0
);
console.log(experience);

console.log(experience / users.length);

// Use .reduce to get the longest email from the list of users.

// let longestEmail = emails.reduce ((longEmail, currentEmail) => {
//     if(currentEmail.length > longEmail.length){
//         return currentEmail;
//     }else{
//         return longEmail
//     }
// }, "");
// console.log(longestEmail);

let longestEmail = emails.reduce ((longEmail, currentEmail) => {
    if(currentEmail.length > longEmail.length) return currentEmail;
    return longEmail
}, "");
console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let names = users.reduce(
    (stack, user) => {return stack += ` ${user.name}`; }, ''
);
console.log(names);

let greeting = users.reduce((runningGreeting, user) => {
    return runningGreeting += user.name + ', ';
}, 'Your instructors are: ');
greeting = greeting.substring(0, greeting.length-2) + '.';
console.log(greeting);




let uniqueLang = users
    .reduce((languages, usersLang) => {
        usersLang.languages.forEach(function (language) {
            if (languages.includes(language)){
            } else {
                languages.push(language);
            }
        });
        return languages
    }, []);
console.log(uniqueLang);



let listOfLan = (list,user) => {list.push(user.languages);
    return list
};
let languages = users.reduce(listOfLan,[]);
// turn the array to string
languages = languages.flat();
// take unique value and creates a list of object
languages = new Set(languages);
console.log(languages);
// making array
languages = Array.from(languages);
console.log(languages);
let movies = [
    {
        "title": "John Wick",
        "rating": "5",
        "id": 1,
        "genre": "action"
    },
    {
        "title": "Star Wars: A New Hope",
        "rating": "5",
        "id": 2,
        "genre": "science fiction"
    },
    {
        "title": "IT",
        "rating": "4",
        "id": 3,
        "genre": "horror"
    },
    {
        "title": "The Notebook",
        "rating": "2",
        "id": 4,
        "genre": "romance"
    },
    {
        "title": "Old School",
        "rating": "4",
        "id": 5,
        "genre": "comedy"
    },
    {
        "title": "Grown Ups",
        "rating": "2",
        "id": 6,
        "genre": "comedy"
    },
    {
        "title": "The Hobbit: An Unexpected Journey",
        "rating": "1",
        "id": 7,
        "genre": "fantasy"
    },
    {
        "title": "Toy Story",
        "rating": "5",
        "id": 8,
        "genre": "animation"
    },
    {
        "title": "Princess Mononoke",
        "rating": "5",
        "id": 9,
        "genre": "anime"
    },
    {
        "title": "Howl's Moving Castle",
        "rating": "5",
        "id": 10,
        "genre": "anime"
    },
    {
        "title": "The Magnificent Seven",
        "rating": "3",
        "id": 11,
        "genre": "western"
    },
    {
        "title": "Catwoman",
        "rating": "1",
        "id": 12,
        "genre": "action"
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "rating": "4",
        "id": 13,
        "genre": "fantasy"
    },
    {
        "title": "Aladdin",
        "rating": "1",
        "id": 14,
        "genre": "live-action"
    }
];
const rateMovie = movies => {
    for(let movie of movies){
        if(movie.rating === '5'){
            console.log(`${movie.title} is fantastic!`)
        }else if(movie.rating === '1'){
            console.log(`${movie.title} is terrible!`)
        }else{
            console.log(movie.title)
        }
    }
};
rateMovie(movies);

if (true) {
    let x = 5;
}
console.log(typeof x);
// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }
// console.log(sayHello('crystal'));

// #1
// const sayHello = (name) => { 'Hello, ' + name + '!' };
// console.log(sayHello('crystal'));



// // #2
// const sayHello = name => { 'Hello, ' + name + '!' }
// console.log(sayHello('crystal'));
//
//
//
// // #3
const sayHello = (name) => `Hello, ${name}!`;
console.log(sayHello('crystal'));
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map(n => n * 3));

const isDivisibleBy3 = n => n % 3 === 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);
//
// const p = new Promise((resolve, reject) => {
//
//     // return 3;
//
//
//
//     resolve(3);
//     //
//     //
//     //
//     // reject(3);
//
//
// });
//
// p.then(result => console.log(result));
// p.catch(error => console.log('An error occured!'));

const p = new Promise((resolve, reject) => {
    // WHAT GOES HERE?

    // return 3;



    // resolve(3)
    //
    //
    //
    reject(3)


});

p.then(result => console.log(result));
p.catch(error => console.log('An error occured!'));