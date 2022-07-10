
// CLOSURE - Learn In 7 Minutes

let myName = "Godam"; // ini global variable
function printName(){
console.log(myName);
}

printName();

myName = "Palu";

printName();

myName = "Gada";

printName();

//output tetap tidak terpengaruh:
// "Godam"
// "Palu"
// "Gada"

function outerFunction1(outerVariable){

  return function innerFunction1(innerVariable){
   console.log(`Inner Variable adalah ${innerVariable}`);
   console.log(`Outer Variable adalah ${outerVariable}`);
}
}

let myFunction1 = outerFunction1("Palu");

myFunction1("Godam");

//output di console:
// Inner Variable adalah Godam
// Outer Variable adalah Palu

function outerFunction2(outerVariable){
  const outer2 = "Gada"; //tambahan variable di parent scope
  return function innerFunction2(innerVariable){
   console.log(`Inner Variable adalah ${innerVariable}`);
   console.log(`Outer Variable adalah ${outerVariable}`);
   console.log(`Outer2 Variable adalah ${outer2}`);
}
}

let myFunction2 = outerFunction2("Palu");

myFunction2("Godam");

//output di console:
// Inner Variable adalah Godam
// Outer Variable adalah Palu
// Outer2 Variable adalah Gada



