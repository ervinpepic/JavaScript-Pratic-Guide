function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User('Ervin');

console.log(user);


function Korisnik(name) {
    if (!new.target) {
        return new User(name);
    }
    this.name = name;
}

let john = Korisnik('Ervin');

console.log(john.name);


function Users(ime) {
    this.ime = ime;

    this.reciZdravo = function() {
        console.log('My name is' + this.ime);
    }
}

let a = new Users('Ervin');

a.reciZdravo();


//first task


function Calculator() {
    this.read = function() {
        this.a = +prompt('Enter value', 0);
        this.b = +prompt('Enter b value', 0);
    }
    this.sum = function () {
        return this.a + this.b;
    }
    this.mul = function () {
        return this.a * this.b;
    }


}

let calc = new Calculator();
calc.read();

console.log(calc.sum(), calc.mul())


//second task

function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function() {
        this.value = +prompt('enter value to start accumulating', 0,0);
        this.value += startingValue;
    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

console.log('sum of value is' + accumulator.value);
