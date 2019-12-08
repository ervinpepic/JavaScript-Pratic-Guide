// let id = Symbol("id");
// let id1 = Symbol("id");
// console.log(id == id1);

// id3 = Symbol("id3");
// // console.log(id3);
// console.log(id.toString());//or id.description to get description for symbol.


// let user = { //belong to another code
//     name: 'Ervin',
// };

// user[id] = 1;

// console.log(user[id]);

// let korisnik = {
//     username: "Ervin",
// };
// //our code
// // korisnik.id('Neka vrijednost');

// //third party code...
// korisnik.id('Neka njihova vrijednost');//bez koriscenja symbol() vrijednost ce biti overwrited

// //if we need symbol in an objec litteral we need to put it in square brackets[] like this
// let useraccess = {
//     name: 'Ervin',
//     [id]: 'some id',//not id:
// }

let testnisimbol = Symbol('id');
let forinlooptest = {
    name: 'Ervin Pepic',
    city: 'Rozaje',
    [testnisimbol]: 1,
}

for (let prop in forinlooptest) {
    console.log(forinlooptest[testnisimbol]);//direct access
}

let ajdi = Symbol();
let objekat = {
    [ajdi]: 123,
}

let clone = Object.assign(objekat);

console.log(clone[ajdi]);

//global symbol

let varijabla  = Symbol.for("id");

let novaVarijabla = Symbol.for("id");

console.log(varijabla == novaVarijabla);

//get symbol by name:
let sym1 = Symbol.for("Ervin");
let sym2 = Symbol.for("Pepic");

//get name by symbol:
console.log(Symbol.keyFor(sym1, sym2));