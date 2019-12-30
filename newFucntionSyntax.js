// The syntax for creating a function:

// let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');

console.log(sum(1, 2));


// And here there’s a function without arguments, with only the function body:

let sayHi = new Function('console.log("Hello")');

sayHi(); // Hello

// All previous declarations required us, programmers, to write the function code in the script.

// But new Function allows to turn any string into a function. For example, we can receive a new function from a server and then execute it:

// let str = ... receive the code from a server dynamically ...

// let func = new Function(str);
// func();

function getFunc() {
    let nekaVrijednost = 'Test';

    let func = new Function('console.log(nekaVrijednost)');

    return func;
}

getFunc()();