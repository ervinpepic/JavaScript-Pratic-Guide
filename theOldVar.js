//difference between var and let
//this is the same//

function sayHi() {
    var phrase = 'Hello';
    return phrase;
}
console.log(sayHi());
// console.log(phrase);

//var has no block scope

if (true) {
    var test = true;

}
console.log(test);

if (true) {
    let te = true;
}

console.log(te);

//var defined inside function is function level variable not code block scope variable example: no mater where variable is deckared

function zdravo(parametar) {
    var ervin;
    if (ervin == parametar) {
        console.log('Hello');
    
    }
}

// is the same as:

function zdravo1(parametar1) {
    
    if (ervin == parametar) {
        console.log('Hello');
    
    }

    var ervin;
}