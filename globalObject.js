alert('Hello');

//is the same as
window.alert('Hello');

//var become the part of global object, not let/const

var gobj = 'Ervin';
alert(window.gobj);

//if some value needed globaly we will declare as global using window

window.currentUser = {
    name: 'Pepa'
};

alert(currentUser.name);

//or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); //

//test if a browser have Promise compatibility 

if(!window.Promise) {
    alert('You use really old browser');
}