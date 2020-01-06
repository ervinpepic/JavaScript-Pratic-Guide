//wrapper functions

//first let assume we have  a slow(x) function which is heavy for CPU:

function slow(x) {
    //some heavy tasks for cpu:
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(yourFuncName) {
    let cache = new Map();

    return function (localParam) {
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

    return function (localParam) {
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

let radnik = {
    slow2(min, max) {
        return min + max;
    }
}

radnik.slow2 = cachingDecorator1(radnik.slow2);

// Going multi-argument with “func.apply”


let radnici = {
    slowFunc(min, max) {
        console.log(`Called with ${min}, ${max}`);
        return min + max;
    }
};

function cchhDecorator(functionToProvide, hashableFunction) {
    let kes = new Map();
    return function () {
        let kljuc = hashableFunction(arguments)
        if (kes.has(kljuc)) {
            return kes.get(kljuc);
        }
        let rezultat = functionToProvide.call(this, ...arguments); //(**)

        kes.set(kljuc, rezultat);
        return rezultat
    };
}

function hashableFunction(args) {
    return args[0] + ', ' + args[1];
}

radnici.slowFunc = cchhDecorator(radnici.slowFunc, hashableFunction);

console.log(radnici.slowFunc(3, 5));
console.log('Ponovo: ' + radnici.slowFunc(3, 5));


// it runs the func setting this=context and using an array-like object args as the list of arguments.

// The only syntax difference between call and apply is that call expects a list of arguments,
//  while apply takes an array-like object with them.

// So these two calls are almost equivalent:

// func.call(context, ...args); // pass an array as list with spread syntax
// func.apply(context, args);   // is same as using apply

// There’s only a minor difference:

// The spread syntax ... allows to pass iterable args as the list to call.
// The apply accepts only array-like args.

//we can improve our cahce function to accpet more than just two arguments like this:

function hashFunc() {
    console.log([].join.call(arguments));
}

hashFunc(1, 2);

// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.

// For instance:


// function work(a, b) {
//   alert( a + b ); // work is an arbitrary function or method
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

function spy(callFunc) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return callFunc.apply(this, args);
    }


    wrapper.calls = [];
    return wrapper;

}


//second task


function delayMs(functionToDelay, miliseconds) {

    return function () {
        setTimeout(() => functionToDelay.apply(this, arguments), miliseconds);
    };

}

let f1000 = delayMs(console.log, 1000);
f1000('Ervin');

//another solution but so cumbersome

function delayMiliseconds(functionToDelay, miliseconds) {

    return function (...args) {
        let savedThis = this;
        setTimeout(function () {
            functionToDelay.apply(savedThis, args);
        }, miliseconds);
    };
}

//third task

function debounceMs(funtctionToProvide, seconds) {
    let isCooldown = false;

    return function () {

        if (isCooldown) return;
        functionToProvide.apply(this, arguments);
        isCooldown = true;

        setTimeout(() => isCooldown = false, seconds);
    };
}

//forth

function thortle(func, ms) {
    let isThortled = false, savedArgs, savedThis;

    function wrapper() {
        if (isThortled) {
            savedThis = this;
            savedArgs = arguments;
            return;
        }
        func.apply(this, arguments);
        isThortled = true;
        setTimeout(function () {
            isThortled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper
}