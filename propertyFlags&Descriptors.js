//property flags

// The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

// The syntax is:

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

// obj
// The object to get information from.
// propertyName
// The name of the property.
// The returned value is a so-called “property descriptor” object: it contains the value and all the flags.

// For instance:

let korisnik = {
    ime: 'Ervin'
};

let opisivac = Object.getOwnPropertyDescriptor(korisnik, 'ime');

console.log(JSON.stringify(opisivac, null, 3));


let korisnik1 = {};

Object.defineProperty(korisnik1, 'ime', {
    value: 'Ervin'
});

// To change the flags, we can use Object.defineProperty.

// The syntax is:

// Object.defineProperty(obj, propertyName, descriptor)
// obj, propertyName
// The object and its property to apply the descriptor.
// descriptor
// Property descriptor object to apply.
// If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.

// For instance, here a property name is created with all falsy flags:

let descriptor = Object.getOwnPropertyDescriptor(korisnik1, 'ime');
console.log(JSON.stringify(descriptor, null, 4));

let korisnik2 = {
    ime: 'Ervin Pepic'
};

Object.defineProperty(korisnik2, 'ime', {
    writable: false
});

let e = korisnik2.ime = 'Emel';

console.log(e);

let korisnik3 = {};

Object.defineProperty(korisnik3, 'imena', {
    value: 'Ervin, Emel',
    enumerable: true,
    configurable: true
});

console.log(korisnik3.imena);
// console.log(korisnik3.imena = 'Emel');

let korinsik4 = {
    ime: 'Erna',
    toString() {
        return this.ime;
    }
};

Object.defineProperty(korisnik3, "toString",{
    enumerable: false
});

for (let kljuc in korisnik3) console.log(kljuc);
