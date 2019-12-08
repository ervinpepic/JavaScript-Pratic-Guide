// let user = new Object(); //object constructor syntax

// let user1 = {}; //object literal syntax 

// let korisnik = { //object
//     name: "Ervin", //by key name store value Ervin
//     age: 30, //by key age store value 30
//     isAdmin: true,
//     "likes birds": true,
// } 

// //object properties are Accessible using dot notation.

// console.log(`Ime korisnika je ${korisnik.name} i ima ${korisnik.age} godina. Ima ulogu admina? ${korisnik.isAdmin} and he like birs ${korisnik["likes birds"]}`);

// let key = prompt('What do you want to know about user?', "name");

// alert(korisnik[key]);


// let fruit = prompt('What fruit would you like to buy?', 'apple');

// let beg = {
//     [fruit]: 5,
// };
// console.log(beg.apple);


// let voce = 'apple';
// let kesa = {
//     [voce + 'Computers']: 5, // bag.appleComputers = 5
// };

// console.log(kesa) 

// function makeUser(name, age){
//     return {
//         name: name,
//         age: age,
//     }
// }

// let kreiraj = makeUser('Ervin', 26);
// console.log(kreiraj.name, kreiraj.age);

// function kreirajKorisnika(ime, godine) {
//     return{
//         ime,
//         godine
//     }
// }

// let kreirajkoris = kreirajKorisnika('Ervin', 25);
// console.log(kreirajkoris.ime, kreirajkoris.godine);

// let user = {};

// console.log(user.isPropertyExist === undefined);

// let user = {name: 'Ervin', age: 30}
// console.log("name" in user, "eee" in user);

// let user = {
//     name: 'Ervin',
//     age: 26,
//     isAdmin: true,
// }

// for(let key in user){
//     // console.log(key);
//     console.log(user[key]);
// }

// let user = {
//     name: "Ervin",
// }

// let admin = user;

// admin.name = "Pepic";

// console.log(user.name);

// let user = {
//     name: "Ervin",
//     age: 30,
//     isAdmin: true,
// }

// let clone = {};

// for (prop in user) {
//     clone[prop] = user[prop]
// }

// clone.age = 15;

// let permission1 = {canView: true}
// let permission2 = {canEdit: true}

// Object.assign(clone, permission1, permission2);

// console.log(clone, user);


// let korisnik = {
//     ime: 'Ervin',
//     prezime: 'Pepic',
// };


// let kljuc = prompt('Unesi ime','ime');

// console.log(korisnik[kljuc]);


/////////////////


// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.


let user = {
    name: 'John',
    surnanme: 'Smith',
};

user.name = 'Pete';

delete user.name;


// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}


// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;
for (let plata in salaries) {
    sum += salaries[plata]; 
}
console.log(sum);




// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

// For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj) {
    for (let svojstvo in obj){
        if(typeof obj[svojstvo] == 'number'){
            obj[svojstvo] *= 2;
            
        }
    }
    console.log(obj);
}

multiplyNumeric(menu);