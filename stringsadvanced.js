// let singlequotes = 'Ervin';
// let doublequotes = "Ervin";
// let backthicks = `Ervin`;

// let multiline = "Ervin \r Pepic\n";

// console.log(multiline.length);
// console.log(multiline[4]);

// for (let slova of multiline) {
//     console.log(slova);
// }

// console.log(~2);

// let recenica = 'bilokojeslovo';

// console.log(recenica.slice(1,7));

// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

// ucFirst("john") == "John";

function ucFirst(str = '') {
    let newstr = str.charAt(0).toUpperCase()+ str.slice(1);
    return console.log(newstr);
        
}

ucFirst('ervin');


// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false


// function checkSpam(str='') {
//     if (str.toUpperCase().includes('Viagra')) {
//         return console.log(true)
//     } else {
//         return console.log(false);
//     }
// }

// checkSpam('dasfdsfa VIagra asdfadsf');

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let newstr = str.slice(0, maxlength -1) + '...';
        return console.log(newstr);
    } else return str;
}

truncate('eeeeeeeeeeeeeee',7);


function extractMoney(str) {
    // return console.log(+str.slice(1));
    return console.log(parseInt(str));
}

extractMoney('$123');