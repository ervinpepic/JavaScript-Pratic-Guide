// let arr = ["Ervin", "Pepic"];

// //destructing into variables
// // let [firstname, surname] = arr;

// // console.log(firstname, surname);

// let [firstname, secondname] = "Ervin pepic".split(' ');

// console.log(firstname, secondname);

// // We can use any “assignables” at the left side.

// // For instance, an object property:

// let user = {};
// [user.name, user.surname] = 'Ervin Pepic'.split(' ');

// console.log(user.name, user.surname);

// let korisnik = {
//     ime: "Emel",
//     godina: 17,
//     prezime: 'Pepic',
//     skola: "Gimnazija Rozaje"
// }

// for(let [kljuc, vrijednost] of Object.entries(korisnik)) {
//     console.log(`${kljuc}: ${vrijednost}`);
// }


// let novikorisnik = new Map();

// novikorisnik.set("Ime", "Ervin");
// novikorisnik.set("prezime", "pepic");
// novikorisnik.set("godina", "1993");
// novikorisnik.set("mjesto", "Rozaje");
// novikorisnik.set("skola", "Master");

// for (let [key,value] of novikorisnik) {
//     console.log(`${key}: ${value}`);
// }


// let [niz1, niz2, ...ostatak] = ['Apple', 'MacBook', 'Pro', 'Is', 'Really', 'Great'];

// console.log(niz1, niz2, ostatak[0],ostatak[2]);


// let propertiesperson = {
//     name: "User",
//     width: 192,
//     height: 78
// };

// // let {width, height, name} = propertiesperson;

// // console.log(width, height, name);

// let {width: v, ...rest} = propertiesperson;
// console.log(v, rest.height, rest.name);


// let options = {
//     size: {
//         visina: 100,
//         tezina: 80,
//     },
//     stavke: ['Kolace', 'Kupine'],
//     extra: true,
// };


// let {
//     size: {tezina, visina}, stavke: [stavka1, stavka2], naslov = 'Menu'} = options;


// We have an object:


// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)


// let user = {
//     name: "John",
//     years: 30
//   };
//   if (!user.isAdmin) {
//     console.log(false)
// }

// let {name: name, years: age, isAdmin:isAdmin } = user;

// console.log(name, age, isAdmin);


// There is a salaries object:


// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };


function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    for(const [ime, plata] of Object.entries(salaries)) {
        if(max < plata) {
            max = plata;
            maxName = ime;
        }
    }
    return maxName;
}

console.log(topSalary(salaries));