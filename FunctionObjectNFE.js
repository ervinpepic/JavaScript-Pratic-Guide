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