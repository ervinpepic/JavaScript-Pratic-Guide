//object stored in memory

// let user = {
//     name: 'John'
// };
// user = null;
// console.log(user.name);

// let user1 = { name: 'John' };

// let niz1 = [user1];
// user1 = null;
// console.log(niz1);

// let user2 = { name: 'Ervin' };
// let map = new Map();
// map.set(user2, 32);
// for (let korisnici of map.keys()) {
//     console.log(korisnici);
// };

// let weak = new WeakMap();
// weak.set(user2, 'Ervin Pepic');

//this code is for example in visit.js using MAP 
// let visitCountMap = new Map();

// function countUsersOnVisit(user) {
//     let count = visitCountMap.get(user) || 0;
//     visitCountMap.set(user, count + 1);
// }

// //and this code is in usercount.js

// let user = { name: 'John' };

// countUsersOnVisit(user);
// countUsersOnVisit(user);


// //later when user leave a site
// user = null;


//this code is for example in visit.js using WeakMap

let visitCountMap = new WeakMap();

function countUserVisit(user) {
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1);
}


let cache = new WeakMap();

function process(objekt) {
    if (!cache.has(objekt)) {
        let result = objekt;
        cache.set(objekt,  result);
    }

    return cache.get(objekt);
}


//main.js

let obj = {/* some code */};

let result = process(obj);

obj = null;

let visitedSet = new WeakSet();

let user3 = { name: 'Ervin' };
let user4 = { name: 'Emel' };
let user5 = { name: 'Mama' };

console.log(visitedSet.has(user3));


let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);
console.log('Read message 0', readMessages.has(messages[0]));
messages.shift();

