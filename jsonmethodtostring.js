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

let korisnik = {
    pozdrav() {
        return console.log('Hello');
    },
    [Symbol('id')]: 123,
    nekosvojstvo: undefined
}

console.log(JSON.stringify(korisnik));

let sastanak = {
    naslov: 'Conference',
    soba: {
        broj: 23,
        pretplatnici: ['erivn', 'emel']
    }
};

console.log(JSON.stringify(sastanak));


// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: ["john", "ann"]
//   };
  
//   meetup.place = room;       // meetup references room
//   room.occupiedBy = meetup;

//   console.log(meetup);

let room = {
    number: 23
};

let meetup = {
    title: 'Conference',
    participants: [{name: 'Ervin'}, {name: 'Emel'}],
    place: room,
};

room.occupiedBy = meetup; //room references meetup

console.log(JSON.stringify(meetup, function zamejnikzaniz(kljuc, vrijednost){
    console.log(`${kljuc}: ${vrijednost}`);
    return (kljuc == 'occupiedBy') ? undefined : vrijednost;
}));

let formatiranje = {
    ime: 'Ervin',
    prezime: 'Pepic',
    ostaliPodaci: {
        isAdmin: true,
        isEditor: false,
    }
};

console.log(JSON.stringify(formatiranje, null, 4));


let apartmani = {
    sobe: 23,
    toJSON() {
        return this.sobe;
    }
};

let seminar = {
    title: 'Conference',
    apartmani
};

console.log(JSON.stringify(seminar));

