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
