
// Closures Lexical Scope

// Two things shall be complied in closures = function having access to parent scope(1) + even after parent function been closed(2)

// This to show lexical scope which is very important in closures (1) and the closure preserve the variable after parent function is closed (2).

let x1 = 1;

const parentFunction1 = () => {
  let myValue1 = 2;
  console.log(x1);               //(1)
  console.log(myValue1);

  const childFunction1 = () => {
    console.log(x1 += 5);        //(1)
    console.log(myValue1 += 1);  //(1)
  }
  
  childFunction1();              //(2)
  //tanpa return, console.log(x) dan console.log(myValue) akan selalu dieksekusi pada setiap parentFunction() dijalankan. 
}

parentFunction1();
parentFunction1();

//output:
//1
//2
//6
//3
//6
//2
//11
//3

let x2 = 2;

const a2 = () => {
 let y2 = 3;
 console.log(x2);
 console.log(y2);
 const b2 = () => {
  console.log(x2 += 4);
  console.log(y2 += 5);
 }
 return b2;
}  

let baru = a2();
baru();

//this sample is only to show lexical scope is very important part in closures (1)

let x3 = 2;

const a3 = () => {
 let y3 = 3;
 console.log(x3);
 console.log(y3);
 const b3 = () => {
  console.log(x3 += 4); //(1)
  console.log(y3 += 5); //(1)
 }
 
}  

a3();
a3();
a3();

//output:
//2
//3
//2
//3
//2
//3

let x4 = 1;

const parentFunction4 = () => {
  let myValue4 = 2;
  console.log(x4);               //(1)
  console.log(myValue4);         

  const childFunction4 = () => {
    console.log(x4 += 5);       //(1)
    console.log(myValue4 += 1); //(1)
  }
  
  return childFunction4;        //(2)
  //return akan didahulukan dieksekusi, sehingga console.log(x) dan console.log(myValue) tidak sempat dieksekusi pada perintah result().
}

const result = parentFunction4();
console.log(result);

result();
result();
result();
console.log(x4);
//console.log(myValue); --> reference error, myValue is not defined. (private variable). Karena console.log dilakukan pada scope global, sementara variable myValue didefinisikan di scope parentFunction, bukan di scope global.

//output:
//1
//2
//() => {
//  console.log(x += 5); // (1)
//  console.log(myValue += 1); // (1)
//  }
//6
//3
//11
//4
//16
//5
//16 




