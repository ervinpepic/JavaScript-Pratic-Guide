// A function can be called with any number of arguments, no matter how it is defined.

function sum (a, b) {
    return a  + b;
};

console.log(sum(10,20));

//gather all arguments of the function also valid for the rest of arguments if we 
// -> defined some
function arrsumrest(...nizargumenata) {
    let sum = 0;
    for ( let arg of nizargumenata) {
        sum += arg;
    }
    return sum;
}

console.log(arrsumrest(1, 4, 5, 6));

function printingData (firstName, lastName, ...nizostalog) {
    for (let clanoviniza of nizostalog) {
        return firstName + ' ' + lastName + ' ->' + clanoviniza ;
    }
    
}

console.log(printingData('ervin', 'Pepic', 'sadfadsfasdfasdf', 'asdfasdf', 'adsfasfdsa'));


let arr = [1,2,3,5,6,7839423];

console.log(Math.max(...arr));