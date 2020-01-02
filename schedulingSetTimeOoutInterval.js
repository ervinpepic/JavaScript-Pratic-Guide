// There are two methods for calling function with postpone:

// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, 
// then repeating continuously at that interval.

// #######################************************##########################

// setTimeout()

function greetingHello() {
    console.log('Zdravo');
}

setTimeout(greetingHello, 10000)

function pozdrav(ime, prezime, pozdrav) {
    x = console.log(pozdrav + ', ' + ime + " " + prezime);
    return x;
}

setTimeout(pozdrav, 10000, 'Ervin', 'Pepic', 'Postovanje');


// setInterval
// The setInterval method has the same syntax as setTimeout:
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);

let timerId = setInterval(() => console.log('ZDRAVOOOO'), 5000);

setTimeout(() => {clearInterval(timerId); console.log('stop')}, 10000);


let timerID = setTimeout(function otkucaj() {
    console.log('otkucaj');
    timerID = setTimeout(otkucaj, 2000);
}, 2002);

//task
//create a function to print numbers from starting time to asssing end time.

function printNumbers(od, doo) {
    let trenutno = od;
    let vremenskiId = setInterval(function() {
        console.log(trenutno);
        if(trenutno == doo) {
            clearInterval(vremenskiId);
        }
        trenutno++;
    }, 1000);
}

printNumbers(10, 20);


function printNumbers1(od, doo) {
    let trenutno = od;
    setTimeout(function go() {
        console.log(trenutno);
        if (trenutno < doo) {
            setTimeout(go, 1000);
        }
        trenutno ++
    }, 1000);
}

printNumbers1(20, 30);