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

// function getDateAgo(date, days) {
//     date.setDate(date.getDate() - days);
//     return date.getDate();
// }


// let date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 365));

// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

// Show it using alert.

let date = new Date(2012, 01, 20, 3,12);
console.log(date);

// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

// For instance:

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"

function getWeekDay(date) {
    let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    return days[date.getDay()];
}

let dat = new Date(2012, 0, 3)

console.log(getWeekDay(dat));


// European countries have days of week starting with Monday 
// (number 1), then Tuesday (number 2) and till Sunday (number 7). 
// Write a function getLocalDay(date) that returns the “European” day of week for date.

function getLocalDay(date) {
    if (date.getDay() == 0) {
        return date.getDay() + 1;
    }
    return date.getDay();
}

let datum = new Date(2012, 0, 3)
console.log(getLocalDay(datum));



// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. The function should not modify the given date.

function getDateAgo(date, days) {
    let copyDate = new Date(date);
    copyDate.setDate(date.getDate() - days);
    return copyDate.getDate();
}
let datee = new Date(2015, 0, 2);
console.log(getDateAgo(datee, 2));


// Write a function getLastDayOfMonth(year, month) 
// that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

// Parameters:

// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

function getLastDayOfMonth(year, month) {
    let lm = new Date(year, month + 1, 0);
    return lm.getDate();
  
}

console.log(getLastDayOfMonth(2012, 1));

// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

// For instance, if now were 10:00 am, and there was no daylight savings shift, then:

// getSecondsToday() == 36000 // (3600 * 10)
// The function should work in any day. That is, it should not have a hard-coded value of “today”.

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today;
    return Math.round(diff / 1000)
    
}

console.log(getSecondsToday());


// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then:

// getSecondsToTomorrow() == 3600
// P.S. The function should work at any day, the “today” is not hardcoded.

function getSecondsToTomorrow() {
    let sada = new Date();
    let tommorow = new Date(sada.getFullYear(), sada.getMonth(), sada.getDate() + 1);
    let razlika = tommorow - sada;
    return Math.round(razlika / 1000);
}
console.log(getSecondsToTomorrow());
