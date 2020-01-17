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

let longestEmail = emails.reduce ((longEmail, currentEmail) => {
    if(currentEmail.length > longEmail.length){
        return currentEmail
    }else{
        return longEmail
    }
}, "");
console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// for (let user of users){
//     let instructors = '';
//     instructors.push(user.name);
// }

// let listOfLan = (list,user) => {list.push(user.languages);
//     return list
// };
// let languages = users.reduce(listOfLan,[]);
// // turn the array to string
// languages = languages.flat();
// // take unique value and creates a list of object
// languages = new Set(languages);
// console.log(languages);
// // making array
// languages = Array.from(languages);
// console.log(languages);



const languages = users.reduce(((lang, user)=>
lang + user.languages), '');
console.log(languages);