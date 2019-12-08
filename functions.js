// // function showMessage(message = '') {
// //     console.log(message);
// // }

// // showMessage('Zdravo');


// // let ime = 'Ervin';

// // function prikazImena(){
// //     console.log('Zovem se:' + ime );
 
// // }

// // prikazImena();


// // function checkAge(age) {
// //     if (age > 18){
// //         return true;
// //     } else {
// //         return confirm('Do you have permission from your parrents?');
// //     }

// // }

// // let godine = prompt('How old are you?', 18);

// // if (checkAge(godine)){
// //     console.log('access granted!');
// // } else {
// //     console.log('Access denied!');
// // }

// // function showMovie(age){
// //     if (!checkAge(godine)){
// //         return;
// //     }

// //     console.log('playing your movie');
// // }



// // function checkAge(age) {
// //     if (age > 18) {
// //       return true;
// //     } else {
// //       return confirm('Did parents allow you?');
// //     }
// //   }


//   function chckAge(ag_e) {
//     return ag_e > 18 ? true : confirm('Do you above age 18?');
    
//   }

//   function chckAge(ag_e) {
//     return ag_e > 18 ? true || confirm('Do you above age 18?');
    
//   }


//   function minNumber(x, y) {
//       if (x<y) {
//           return x
//       } else {
//           return y
//       }
//   }



function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i ++) {
        result = result * x;
    }
    return result
}

let x = prompt('X ?', '');
let n = prompt('N ?', '');
if (n < 1) {
    console.log(`Power ${n} can't be negative numebr, please use positive number...`);
} else { 
    console.log(pow(x,n));
}
