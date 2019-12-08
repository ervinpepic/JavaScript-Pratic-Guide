// let now = new Date();
// console.log('Trenutno Vrijeme ---', now);

// let Jan01_1970 = new Date(0);
// console.log('Vrijeme od kako Java script moze da biljezi ---', Jan01_1970);
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log('Dodata 24h na pocetak racunanja JS vremena ---', Jan02_1970);

// //if date is in string format, then it will be parsed automaticaly;

// let stringdate = new Date('2019-10-21');
// console.log(stringdate);

// //date format is new Date(godina, mesec, datum, sati, minuti, sekunde, milisekunde);


// //testiranje funkcija datuma;

// let sada = new Date();
// let dan = sada.getHours();
// let utc = sada.getUTCHours();
// console.log(sada, dan, utc);

// let sa_da = new Date();

// // console.log( sa_da.getTimezoneOffset() );
// // console.log('set hours', sa_da.setHours(0));
// // console.log(sa_da.setSeconds(sa_da.getSeconds() + 70));//vrijeme nakon 70 sekundi od sadasnjeg

// let start = Date.now();

// for (let i = 0; i < 1000000; i ++) {
//     uradiNesto = i * i * i;
// }
// let kraj = Date.now();

// console.log(`Krug je trajao od ${start} do ${kraj} milisekundi`);

// //benchmark testing with processor

// function diffGetTime (datum1, datum2) {
//     return datum2.getTime() - datum1.getTime();
// };

// function diffSubract(datum1, datum2) {
//     return datum2 - datum1;
// };

// function benchmark(paramtar) {
//     let datum1 = new Date(0);
//     let datum2 = new Date();

//     let pocetak = Date.now();
//     for ( let i = 0; i < 100000; i ++) {
//         paramtar(datum1, datum2);
//     }
//     return Date.now() - pocetak;
// }
// let vrijeme1 = 0;
// let vrijeme2 = 0;

// benchmark(diffSubract);
// benchmark(diffGetTime); 
// for ( let i = 0; i < 10; i ++) {
//     vrijeme1 += benchmark(diffSubract);
//     vrijeme2 += benchmark(diffGetTime);
// }
// console.log('Vrijeme diff subratct funkcije: ' + vrijeme1 + 'ms' );
// console.log('Vrijeme diff GetTime funkcije: ' + vrijeme2 + 'ms' );

// let datum = new Date();
// console.log('vrijeme gettime je:', datum);


// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

// Show it using alert.

// let date = new Date('2012-02-20T03:12') //or(2012, 1, 20, 3, 12);
// alert(date);


// function getWeekDay(datum) {
//     let dani = ['pon', 'uto', 'sri', 'cet', 'pet', 'sub', 'ned'];

//     return dani[datum.getDay()];
// }

// let datum = new Date(2014, 0, 3);
// console.log(getWeekDay(datum));

// function getLocalDays(date) {
//     let eurodays = date.getDay();
//     return eurodays;
// }

// let date = new Date(2012, 0, 3);
// console.log(getLocalDays(date));

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}


let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 365));