// // //two syntax for creatin arrays

// // let arr = new Array();
// // let arr1 = [];

// // //supply array

// // let niz = ['jabuke', 'kruske', 'sljive'];

// // //mijenjanje elementa u nizu
// // niz[0] = 'banane';

// // //dodavanje elementa nizu
// // niz[3] = 'nar';

// // console.log(niz);

// // console.log(niz.length);

// // let nizmix = ['jabuke', { ime: 'Ervin' }, true, function sayHello() { console.log('hello')}];

// // console.log(nizmix[1].ime);

// // let niztest = ['jabuka', 'mandarina', 'kruska'];

// // console.log(niztest.pop());
// // console.log(niztest.push('Ervin'));
// // console.log(niztest);

// // let arrshift = ['test1', 'test2', 'test3'];
// // console.log(arrshift);
// // console.log(arrshift.shift());
// // console.log(arrshift);
// // console.log(arrshift.unshift('test1'));

// let niz = ['jabuke', 'kruske', 'banane'];

// for (let i = 0; i < niz.length; i++) {
//     console.log(niz[i]);
// }

// for (let nz of niz) {
//     console.log(nz);
// }

// for (let nizkljuc in niz) {
//     console.log(niz[nizkljuc]);
// }
// let noviniz = [1,2,3];
// console.log(String(noviniz));


// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// // what's in fruits?
// alert( fruits.length ); // ?


// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
// The array in the process:

// Jazz, Blues tacno
// Jazz, Blues, Rock-n-Roll tacno
// Jazz, Classics, Rock-n-Roll tacno
// Classics, Rock-n-Roll tacno
// Rap, Reggae, Classics, Rock-n-Roll tacno


// let styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll');
// styles[Math.floor((styles.length - 1) / 2) ] = 'Classics';
// styles.shift();
// styles.unshift('Rap', 'Reggae');
// console.log(styles);


// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt("value please", 0);
//     if(value === '' || value === null || !isFinite(value) ) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(sumInput());

function subsumarray() {
  
  let maxSum = 0; //ako ne uzmemo ni jedan element, nula ce biti vracena
  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;  
    for (let j = i; j < arr.length; j++) {
      sumFixedStart = sumFixedStart + arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }
  return maxSum
}

alert( subsumarray([-1, 2, 3, -9]) ); // 5
alert( subsumarray([-1, 2, 3, -9, 11]) ); // 11
alert( subsumarray([-2, -1, 1, 2]) ); // 3
alert( subsumarray([1, 2, 3]) ); // 6
alert( subsumarray([100, -9, 2, -3, 5]) ); // 100