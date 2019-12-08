// let mapa = new Map();

// mapa.set('1', 'Ervin');
// mapa.set(1, 'Pepic');
// mapa.set(true, 'Pepa');

// console.log(mapa.get(1));
// console.log(mapa.get(true));
// console.log(mapa.get('1'));


// let recipeMap = new Map([
//     ['krastavac', 500],
//     ['paradajz', 200],
//     ['luk', 100]
// ]);

// // for (let povrce of recipeMap.keys()) {
// //     console.log(povrce);
// // }

// // for (let povrce of recipeMap.values()) {
// //     console.log(povrce);
// // }

// // for (let povrce of recipeMap.entries()) {
// //     console.log(povrce);
// // }

// recipeMap.forEach((vrijednost, kljuc, mapa) => {
//     console.log(`Povrce ${kljuc}, tezina ${vrijednost}, mapa ${mapa}`)
// });

// let novamapa = new Map([
//     ['1', 'Ervin'],
//     [2, 'Emel'],
//     [true, 'Familija']
// ]);

// console.log(novamapa.get(2));


// let obj = {
//     ime: 'Ervin',
//     godine: 26,
// };

// let mapobj = new Map(Object.entries(obj));

// console.log(mapobj.get('ime'));

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['jabuka', 2],
//     ['kruska', 3]
// ]);

// console.log(prices.banana);

// let kreacija = new Map();

// kreacija.set('banana', 1)
//         .set('krusa',2)
//         .set('jabuka', 3);

// let novi = Object.fromEntries(kreacija.entries());

// console.log(novi.kruska);




let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(values));


function anagram(arr) {
    let mapa = new Map();

    for (rijeci of arr) {
        let sortirano = rijeci.toLowerCase().split('').sort().join('');
        mapa.set(sortirano, rijeci);
    }
    return Array.from(mapa.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(anagram(arr));


function anagramobj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split('').sort().join();
        obj[sorted] = arr[i];
    }

    return Object.values(obj);
}

console.log(anagramobj(arr));

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
console.log(keys)