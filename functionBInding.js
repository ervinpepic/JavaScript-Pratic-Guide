//losing this when we use it out of object scope
//example

let user = {
    fullName: 'Ervin Pepic',
    sayHi() {
        console.log(`Hello ${this.fullName}!`);
    }
};

setTimeout(user.sayHi, 1000);