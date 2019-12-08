// let a = 2 + 2;

// switch (a) {
//     case 1:
//         console.log('Too small to be true..sorry');
//         break;
//     case 2:
//         console.log('hottier, but still small to be true..sorry');
//         break;
//     case 3:
//         console.log('Not bad...try again ...');
//         break;
//     case 4:
//         console.log('Great!!');
//     default:
//         console.log("I don't know what you talking about.");
// }


// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:let browser = prompt('Enter your browser name');
//       alert( 'We hope that this page looks ok!' );


// let browser = prompt('Enter the name of browser you use...');
// if (browser == 'Edge'){
//     console.log(`You've got the Edge`);
//  } else if(browser == 'Chrome' || 'Firefox'|| 'Safari' || 'Opera') {
//      console.log('Okay we support these browser too');
//     } else {
//         console.log("We hope that this page looks ok!");
//     }


let a  = +prompt('a?', '');

switch (a) {
    case 0:
        console.log(0);
    break;
    case 1:
        console.log(1);
    break;
    case 2:
    case 3:
        console.log('2,3');
    break;
}