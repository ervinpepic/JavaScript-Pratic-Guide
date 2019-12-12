//iterate over to multiply x itself by n times
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i ++) {
        result = result * x;
    }

    return result
}


console.log('loop solution' ,pow(2,2));
console.log('loop solution' ,pow(2,3));
console.log('loop solution' ,pow(2,4));


//recursive solution

function pow1(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow1(x, n - 1);
    }
}

//or using contidional operator

function pow2(x, n) {
    return (n == 1) ? x : (x * pow2(x, n - 1));
}

console.log('recursive solution' ,pow1(2,2));
console.log('recursive solution' ,pow1(2,3));
console.log('recursive solution' ,pow1(2,4));


console.log('recursive conditional opoerator solution' ,pow2(2,2));
console.log('recursive conditional opoerator solution' ,pow2(2,3));
console.log('recursive conditional opoerator solution' ,pow2(2,4));


let company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        }, 
        {
            name: 'Alice',
            salary: 600,
        }
],
    development: {
        sites: [
            {
                name: 'Peter',
                salary: 2000

            },
            {
                name: 'Alex',
                salary: 1800
            }
    ],
        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    },
};

function sumSalaries(departmani) {
    if (Array.isArray(departmani)) {
        return departmani.reduce
        ((
            prethodnaVrijednost, trenutnaVrijednost) => prethodnaVrijednost + trenutnaVrijednost.salary, 0
        )
    } else {
        let sum = 0;
        for (let subDep of Object.values(departmani)) {
            sum = sum + sumSalaries(subDep);
        }
        return sum;
    }
}

console.log(sumSalaries(company));

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

list = {next: 'New value', next: list};
console.log(list);

// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumTo(n) {
    let sum = 0;
    for (let i = 0; i < n; i-1) {
        sum += n--;
    }
    return sum;
}

console.log('for 1', sumTo(1));
console.log('for 2', sumTo(2));
console.log('for 3', sumTo(3));
console.log('for 4', sumTo(4));
console.log('for 100', sumTo(100));


function sumToRecursive(n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumToRecursive(n-1);
    }
}

console.log('Recursive call za 1', sumToRecursive(1));
console.log('Recursive call za 2', sumToRecursive(2));
console.log('Recursive call za 3', sumToRecursive(3));
console.log('Recursive call za 4', sumToRecursive(4));
console.log('Recursive call za 100', sumToRecursive(100));


function sumToSecondSolutin(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumToNusingArithmeticProgression(n) {
    return n * (n + 1) /2;

}

console.log('ArithmeticProgression call za 1', sumToNusingArithmeticProgression(1));
console.log('ArithmeticProgression call za 2', sumToNusingArithmeticProgression(2));
console.log('ArithmeticProgression call za 3', sumToNusingArithmeticProgression(3));
console.log('ArithmeticProgression call za 4', sumToNusingArithmeticProgression(4));
console.log('ArithmeticProgression call za 100', sumToNusingArithmeticProgression(100));


function factorial(n) {
    if (n == 1 || n == 0) {
        return n;
    } else {
        return n * factorial(n-1);
    }

}

console.log(factorial(5));


function fib(n) {
    
    if (n == 1 || n == 0) {
        return n;
    } else {
        return fib(n-1) + fib(n-2);
    }
        
    }
// Fn = Fn-1 + Fn-2
console.log(fib(3));
console.log(fib(7));
console.log(fib(10));


//fastest solution for JS engine

function fibonachi(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonachi(3));
console.log(fibonachi(7));
console.log(fibonachi(77));


let list1 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list) {
    let tmp = list;
    while(tmp){
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

console.log(printList(list1));

//recursive solution

function prinlistrecursive(list) {
    console.log(list.value);
    if (list.next) {
        prinlistrecursive(list.next);
    }
}

console.log(prinlistrecursive(list1));


function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while(tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

console.log(printReverseList(list1));


function printreverselistrecursive(list) {
    if (list.next) {
        printreverselistrecursive(list.next);
    }
    console.log(list.value);
}

console.log(printreverselistrecursive(list1));