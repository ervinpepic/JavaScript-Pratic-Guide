//arrow function don't have this

let group = {
    title: "Our new group",
    students: ["Ervin", "Emel", "Mati"],
    showList() {
        this.students.forEach(studentZaPrikazListe => console.log(this.title + ' ' + studentZaPrikazListe));
    }
}

group.showList();


function defer(functionForWhichApply, miliseconds) {
    return function() {
        setTimeout(() => functionForWhichApply.apply(this, arguments), miliseconds);
    }
}

function seyHi(ko) {
    console.log(`Postovanje, ${ko}`);
}

let deferedPlay = defer(seyHi, 10000);
deferedPlay('Ervine');


function deferetWithoutArrow(functionToApply, miliseconds) {
    return function(...args) {
        let ctx = this;
        setTimeout(function(){
            return functionToApply.apply(ctx, args)
        }, miliseconds);
    }
}


// Arrow functions:

// Do not have this
// Do not have arguments
// Can’t be called with new
// They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance
// That’s because they are meant for short pieces of code that do not have their own “context”,
//  but rather work in the current one. And they really shine in that use case.