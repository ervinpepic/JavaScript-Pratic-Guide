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