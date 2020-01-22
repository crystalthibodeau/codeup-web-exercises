

// const wait = secs => new Promise((resolve, reject) => setTimeout(resolve, secs));

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//==========================================class example=====================================

// const wait = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, num);
//     })
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//==========================================END class example=====================================


function lastCommit(user) {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token ${gitHubKey}`  }})
        .then((data) => {
            // console.log(data);
            return data.json()
        }).then((jsonData) => {
            console.log(jsonData);
            return "Date is: " + jsonData[0].created_at + " user name is: " + jsonData[0].actor.display_login
        })
}

lastCommit('crystalthibodeau').then((data) => console.log(data));


//==========================================class example=====================================

// fetch(`https://api.github.com/users`, {headers: {'Authorization':  `token ${gitHubKey}` }})
// .then(resp => {
//     console.log(resp);
//     return resp.json();
// })
// .then(users => {
//     console.log(users);
//     return users.map(user => user.login);
// })
// .then(usernames => console.log(usernames));


// const lastCommit = (username) => {
//     fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization':  `token ${gitHubKey}` }})
//         .then(resp => resp.json())
//         .then(data => data.find(event => event.type === 'PushEvent'))
//
//         .then(event => event.created_at)
//         .then(date => console.log(date))
// };
// lastCommit('crystalthibodeau');