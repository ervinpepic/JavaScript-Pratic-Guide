// let user = {
//     name: 'Ervin',
//     age: 26,
// };

// console.log(Reflect.ownKeys(user));
// // console.log(Object.values(user));
// // console.log(Object.entries(user));

// for (let values of Object.values(user)) {
//     console.log(values);
// }

// let prcies = {
//     banana: 2,
//     jabuka: 5,
//     kruska: 3
// };

// let duplirajCijenu = Object.fromEntries(Object.entries(prcies).map(([kljuc, vrijednost]) => [kljuc, vrijednost * 2]));

// console.log(duplirajCijenu);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  let sum = 0;
  for (let plate of Object.values(salaries)) {
      sum += plate;
      if (!Object.values(salaries)) {
          sum = 0;
      }
  }
  console.log(sum);

  function sumSalaries(salaries) {
      return Object.values(salaries).reduce((a,b) => a + b, 0);
  }

  console.log(sumSalaries(salaries));


  let user = {
    name: 'John',
    age: 30
  };

  function countProperties(objekat) {
      return Object.keys(objekat).length;
  }

  console.log(countProperties(user));