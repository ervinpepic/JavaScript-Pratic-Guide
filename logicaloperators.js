let workingHours = 9;
let isWeekend = true;
if(workingHours < 10 || workingHours > 18 || isWeekend) {
    alert('Office is closed right now.');
}

let currentUser = null;
let defaultUser = 'John';

let name = currentUser || defaultUser || 'Unnamed';

alert(name);

let ageRange;

if (ageRange > 14 || ageRange < 90) {

    prompt("Enter age");
}

let username = prompt('Who is there?', '');
if(username == 'Admin'){
    let password = prompt('Enter your password...','');
    if(password == 'TheMaster'){
        alert('Welcome!')
    } else if(password == '' || password == null) {
        alert('Canceled');
    }
} else if(username == '' || username == null){
    alert('Canceled');
} else {
    alert("I don't know you.")
}


