// A function gets outer variables as they are now, it uses the most recent values.
// Old variable values are not saved anywhere. When a function wants a variable, 
//it takes the current value from its own Lexical Environment or the outer one.
let name = 'Ervin';

function sayHi() {
    console.log('Name is ' + name);
};

name = 'Pepic';

console.log(sayHi(name));

function makeWorker() {
    let ime = 'Malik';

    return function() {
        console.log(ime);
    };
}

let ime = 'Amar';

let work = makeWorker();

console.log(work());


// nested functions

// A function is called “nested” when it is created inside another function.

function sayHiBye(firstName, lastName) {

    function getFullName() {
        return firstName + ' ' + lastName;
    };

    console.log('Hello', + getFullName() );
    console.log('Bye', + getFullName() );
}
let e = 'Ervin';
let p = 'Pepic';
sayHiBye(e, p);

function User(name) {
    this.zdravo = function() {
        console.log(name);
    };
}

let user = new User('Ervin p');
user.zdravo();

function makeCounter(){
    let count = 0;

    return function() {
        return count ++;
    }
}

let counter = makeCounter();

console.log(counter() );
console.log(counter() );
console.log(counter() );
console.log(counter() );

//to isolate variable from global scope when JS is used for browser use code blocks

{
    let message = 'Hello';
    console.log( message);
}
// console.log(message);//not defined out of scope 


//v8 JS engine optimization vs theory

function f() {
    let vrijednost = Math.random();
 
    function g() {
        debugger;
    }
    return g;
}

let g = f();
g();

let value = 'surprise';

function a() {
    let value = 'neka vrijednost';

    function b() {
        debugger;
    }
    return b();
}

let k = a();
k();