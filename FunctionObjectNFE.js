// Function objects contain some useable properties.

// For instance, a function’s name is accessible as the “name” property:

function sayHi() {
    console.log('Hello');
}

console.log(sayHi.name);


function f(sayHi = function(){}){
    console.log("Ervin");
}

f();

// Object methods have names too:

let user = {
    sayHi1() {
        //
    },
    sayBye: function() {
        //
    }
};

console.log(user.sayHi1.name);
console.log(user.sayBye.name);

// There’s no magic though.
//  There are cases when there’s no way to figure out the right name. In that case, the name property is empty, like here:

let arr = [function() {}];
console.log(arr[0].name);

function prva(a1) {
    //
}

function druga(a1,a2, a3){
    //
}

console.log(prva.length);
console.log(druga.length);

function ask(question, ...rukovanjeOdgovrima) {
    let odgovorDa = confirm(question);

    for (let rukovanje of rukovanjeOdgovrima) {
        if (rukovanje.length == 0) {
            if(odgovorDa) rukovanje();
        } else {
            rukovanje(odgovorDa);
        }
    }
}
function pozdrav() {
    console.log('Zdravo');

    pozdrav.counter++;
}
pozdrav.counter = 0;

pozdrav();
pozdrav();

console.log(`Pozvali ste funkciju ${pozdrav.name} ${pozdrav.counter} puta`);


function makeCounter(){
    //instead of let count = 0;

    function counter() {
        return counter.count++
    };

    counter.count = 0;

    return counter;

}

let counter = makeCounter();

console.log(counter());
console.log(counter());


// Named Function Expression, or NFE, is a term for Function Expressions that have a name.

// For instance, let’s take an ordinary Function Expression:

let naziv = function reciZdravo(ko){
    console.log(`zdravo ${ko}`);
}

//or

let naziv1 = function func(ko) {
    console.log(`zdravo ${ko}`);
}

naziv('Ervin');
naziv1('Erevin');


let pozdrav2 = function func(who) {
    if (who) {
        console.log(`Hello ${who}`);
    } else {
        func("Guest");
    }
}
pozdrav2();



function makeCounterTask(){
    let count = 0;

    function counter() {
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;

    return counter;

}


// Write function sum that would work like this:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// P.S. Hint: you may need to setup custom object to primitive conversion for your function.


function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    }

    return f;
}

console.log(sum(1)(2)); // 1 + 2
console.log(sum(1)(2)(3)); // 1 + 2 + 3
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));