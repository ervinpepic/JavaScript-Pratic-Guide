let sum = function(x,y){
    x = 10;
    y = 20;
    let summarum = x + y;
    return summarum;
};

console.log(sum());

let sum1 = (x1, x2) => {
  return x1 + x2;
};

console.log(sum1(3,5));



function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  ask(
      'Do you agree?',
      () => console.log('You agreed.'),
      () => console.log('You just dismiss.')
  );


 