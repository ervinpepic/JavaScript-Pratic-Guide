// //losing this when we use it out of object scope
// //example

// let user = {
//     fullName: 'Ervin Pepic',
//     sayHi() {
//         console.log(`Hello ${this.fullName}!`);
//     }
// };

// setTimeout(user.sayHi, 1000);

// //resolve this problem

// setTimeout(function(){
//     user.sayHi();
// }, 1000);

// //or shorter way

// setTimeout(() => user.sayHi(), 1000);

// // Looks fine, but a slight vulnerability appears in our code structure.

// // What if before setTimeout triggers (there’s one second delay!) user changes value? 
// // Then, suddenly, it will call the wrong object!

// //Solution: Bind

// let user1 = {
//     firstName: 'ervin'
// };

// function func() {
//     console.log(this.firstName);
// }

// let funcUser = func.bind(user1);
// funcUser();

// function f(phrase) {
//     console.log(phrase + ', ' + this.firstName);
// }
// let funcUser2 = f.bind(user1);
// funcUser2('Hello');


// let korisnik = {
//     firstName: 'Ervine',
//     sahHi() {
//         console.log(`Hello, ${this.firstName}`);
//     }
// };

// let pozdrav = korisnik.sahHi.bind(korisnik);

// pozdrav();
// setTimeout(pozdrav, 10000);


// let person = {
//     firstName: 'Korisnik',
//     govor(fraza) {
//         console.log(`${fraza}, ${this.firstName}`);
//     }
// };

// let nekaRijec = person.govor.bind(person);
// nekaRijec('Postovanje');
// nekaRijec('Cao');


// //Partial function bind examples

// function multiply(a, b) {
//     return a * b;
// }

// let double = multiply.bind(null, 2);

// console.log(double(5));

// // going partial without context
// function parcijalno(imeFunkcije, ...granicaArgumenata) {
//     return function(...args) {
//         return imeFunkcije.call(this, ...granicaArgumenata, ...args);
//     }
// }


///first task

function f() {
    console.log(this);
}

let korisnik21 = {
    g: f.bind(null)
};

korisnik21.g();

function q () {
    console.log(this.name);
}

ispit = q.bind( {name: 'Ervin' }).bind({name: 'Pepic'});
ispit();


//second task


function reciZdravo() {
    console.log(this.name);
}

reciZdravo.test = 5;

let ogranici = reciZdravo.bind({
    name: "Pepa"
});

console.log(ogranici.test);


//third task

function askPassword(ok, fail) {
    let password = prompt('Password', '');
    if (password == 'rockstar') ok();
    else fail;
}

let loznikaKorisnikl = {
    name: 'Ervin',

    isOk() {
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log(`${this.name} failed to login`);
    }
};

askPassword(() => loznikaKorisnikl.isOk(), () => loznikaKorisnikl.loginFail());



function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(() => user.login(true), () => user.login(false)); // ?