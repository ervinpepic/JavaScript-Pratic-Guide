// let arr = ['Ervin', 'Emel', 'Mati'];

// // console.log(arr);

// // arr.splice(1,1);
// // console.log(arr.length);

// let niz = ['Ja', 'ucim', 'JavuScript', 'upravo sada', '2019', 'Novembar'];
// // console.log(niz);
// niz.splice(0,3, 'Naucio', 'Dosta', 'Poglavlja');
// // console.log(niz);

// niz.splice(-1,0,'brojevi');
// // console.log(niz);
// let noviniz = niz.slice();
// // console.log(noviniz);
// noviniz.splice(1,2);
// // console.log(niz,noviniz);

// let jedanniz = [1,2,3];

// let druginiz = [4,5,6];
// // jedanniz.forEach((item, index, array) => {
// //     console.log(`${item} is at index ${index} in ${array}`);

// // });
// // console.log(jedanniz.concat([-1,-2],druginiz));

// let objekat = [
//     {ime: 'Ervin'},
//     {ime: 'Ervin'},
//     {ime: 1993}

// ]
// // let objekatserach = objekat.filter(stavka => stavka.ime == 'Ervin');

// // console.log(objekatserach);

// let niz0 = ['Ervin', 'Pepic', 'Mati', 'Sara', 'Amar'];

// let duzina = niz0.map(stavkaunizu => stavkaunizu.length);
// // console.log(duzina);

// let imena = "ervin, emel, mati";

// let niz2 = imena.split(', ');

// // for (let ime of niz2) {
// //     console.log(`Poruka je poslata za ${ime}`);
// // }

// let niz3 = 'ervin';
// // console.log(niz3.split(''));

// let niz4 = [1,2,3,4,5];
// let rezultat = niz4.reduce((suma, trenutnavrijednost) => suma + trenutnavrijednost, 0);
// console.log(rezultat);

function camelize(str) {

}


// Write the function camelize(str) that changes 
// dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.


// function camelize(recenica = '') {
//     return recenica.split('-')
//     .map((rijec, brojunizu) => { 
//         if (brojunizu == 0) { 
//             return rijec 
//         } else 
//         return rijec[0].toUpperCase() + rijec.slice(1)});
// }

// console.log(camelize('ervin-pepic-ervin'));
///////kompletiran naucen//////


// Write a function filterRange(arr, a, b) that gets an array arr, 
// looks for elements between a and b in it and returns an array of them.

// The function should not modify the array. It should return the new array.

// For instance: 
// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// function filterRange(arr, a, b) {
//   return arr.filter(stavkapretrage => (a <= stavkapretrage && stavkapretrage <= b));

// }

// let arr = [5,3,8,1];
// let filtered  = filterRange(arr, 1,4);
// console.log(filtered);
// console.log(arr);

////////////////////////////////////////////////////////////////////////////////

// Write a function filterRangeInPlace(arr, a, b) 
// that gets an array arr and removes from it all values except those 
//that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i ++){
//     let vrijednost = arr[i];
//     console.log(vrijednost);

//     if (vrijednost < a || vrijednost > b) {
//       arr.splice(i, 1);
//       i --;
//     }
//   }
// }

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// function decreasingorder(a,b){
//   if( b > a) return 1;
//   if ( b == a) return 0;
//   if (b < a) return -1; 
// }

// let arr = [5, 2, 1, -10, 8];
// let ervin = arr.sort(decreasingorder);

// console.log(ervin);

// // // ... your code to sort it in decreasing order

// // alert( arr ); // 8, 5, 2, 1, -10


// We have an array of strings arr. 
// We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["html", 'javascript', 'css'];

// let copsortet = copySorted(arr);
// console.log(copsortet);
// console.log(arr);

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
  
  this.calculate = function (str) {
    let split = str.split(''),
    a = +split[0],
    op = split[1],
    b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN
    }
    return this.methods[op](a, b);
  }

  this.addMethods = function (name, func) {
    this.methods[name] = func;
  };

}


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let korisnici = [john, pete, mary];

// let imena = korisnici.map((stavkaizobjekta => stavkaizobjekta.name));
// console.log(imena);

let novastavka = korisnici.map(korisnik => 
  ({ 
    fullName: `${korisnik.name} ${korisnik.surname}`, 
    id: korisnik.id 
}));
console.log(novastavka[0].fullName);