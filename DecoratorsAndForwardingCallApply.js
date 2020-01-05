//wrapper functions

//first let assume we have  a slow(x) function which is heavy for CPU:

function slow(x) {
    //some heavy tasks for cpu:
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(yourFuncName) {
    let cache = new Map();

    return function(localParam) {
        if (cache.has(localParam)) {
            return cache.get(localParam);
        }
        let result = yourFuncName(localParam);
        cache.set(localParam, result);
        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log('Caching: ' + slow(1));

console.log(slow(2));
console.log('Cacing: ' + slow(2));

// In the code above cachingDecorator is a decorator:
//  a special function that takes another function and alters its behavior.


let worker = {
    someMethod() {
        return 1;
    },
    slowF(x) {
        console.log('Called with ' + x);
        return x * this.someMethod();
    }

};

function cachingDecorator1(yourFuncName) {
    let cache = new Map();

    return function(localParam) {
        if (cache.has(localParam)) {
            return cache.get(localParam);
        }
        let result = yourFuncName.call(this, localParam);
        cache.set(localParam, result);
        return result;
    };
}

console.log(worker.slowF(1));
worker.slowF = cachingDecorator1(worker.slowF)
console.log(worker.slowF(1));


// There’s a special built-in function method func.call(context, …args) that allows to call a function explicitly setting this.

// The syntax is:

// func.call(context, arg1, arg2, ...)


function sayHi() {
    console.log(this.name);
}

let user = { name: 'Ervin' };
let admin = { name: 'Admin' };

sayHi.call(user);
sayHi.call(admin);

// And here we use call to call say with the given context and phrase:

function say(phrase) {
    console.log(this.name + ': ' + phrase);
}
let user1 = ('Ervin Pepic');
say.call(user, 'Hello');