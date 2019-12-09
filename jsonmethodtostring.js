let user = {
    name: 'Ervin',
    age: 26,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};

console.log(user);

let student = {
    name: 'Ervin',
    age: 26,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let jsonConvert = JSON.stringify(student);

console.log(typeof jsonConvert);
console.log(jsonConvert);