// while loop executes while condition is truthy. 

// let i = 0;
// while(i<3) {
//     alert(i);
//     i++
// }
// let i1 = 4;
// while(i1) {
//     alert(i1);
//     i1--;
// }

// let i = 0;
// do {
//     alert (i);
//     i++
// } while(i <3);

// for(let a=0; a<10; a++) {
//     console.log(a);
    
// }

// let i = 0;
// for(;i<10;i++){
//     console.log(i);
// }

// let i = 0;
// for(;i<20;){
//     console.log(i++)
// }

// let suma = 0;

// while(true){
//     let value = +prompt('Enter a number', '');
//     if(!value) break;
//     suma = suma + value;
// }

// alert('Suma je: ' + suma);

// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0) continue 
//     console.log(i);
// }


// outer: for(i = 0; i < 10; i++){
//     for(j = 0; j < 10; j++) {
//         let unos = prompt(`Unesite koordinate:(${i},${j})`, '');
//         if(!unos) break outer;
//     }
// }
// console.log('Done');

// for(let i=2; i < 10; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     } 
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

//   let i = 0;
//   while(i<3){
//       alert(`number ${i}`);
//       i++;
//   }

// let i=0;
// while(i<100){
//     input = prompt(`Enter a number ${i}`, '');
//     if(i>100) break;
    
//     }
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...
    // console.log(i)

  for (let j = 2; j < i; j++) { // look for a divisor..
    console.log(j)
    if (i % j == 0) continue nextPrime; // not a prime, go next i
    // console.log(j)
  }

//   console.log( i ); // a prime
}