let user = {
    name: 'Ervin',
    money: 1000,

    [Symbol.toPrimitive] (hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    } 
    
};

console.log(user);
console.log(+user);
console.log(user + 500);


let user1 = {
    name1: 'Pepic',
    money: 1000,

    //for hint ="string"
    toString() {
        return `{hello: "${this.name1}"}`;
    },

    //for hint = "number" or "default"
    valueOf() {
        return this.money;
    }
}

console.log(user1);
console.log(+user1);
console.log(user1 + 500);

let objekat = {
    toString() {
        return "2";
    }
}

console.log(objekat * 2);