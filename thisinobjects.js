let user = {
    name: 'Ervin',
    age: 30,
};

user.sayHi = function() {
    console.log('Hello');
};

user.sayHi();

console.log(user);


let korisnik = {
    name: 'Ervin',
    sayHi1(){
        console.log('short version');
    },
};

korisnik.sayHi1();

function sayHello() {
    alert(this.name);
}

user.f = sayHello;
korisnik.f = sayHello;

// user.f();
// korisnik.f();

let ervin = {
    name: "John",
    go: function() { console.log(this.name) }
  };
  
  (ervin.go()) // John


//   Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b
    },

    read() {
        this.a = +prompt('enter value', 0);
        this.b = +prompt('enter another value', 0);
    }

    
};

calculator.read();

console.log(calculator);