
// How to create closure?

// For example, we want to make function for a counter

let counter1 = 0;
let add1 = function() {
 return ++counter1;
}

console.log(add1());
console.log(add1());
console.log(add1());

//output:
// 1
// 2
// 3

// So far OK. 
// Let's see below case. It's same function.

let counter2 = 0;
let add2 = function() {
 return ++counter2;
}

// But how if we used counter2 variable somewhere in the code for other purpose without realizing it.
// Apa yang terjadi jika pada baris ke sekian ratus tanpa sadar kita tambahkan variabel counter utk keperluan lain spt ini:

counter2 = 10;

console.log(add2());
console.log(add2());
console.log(add2());

//outputnya berubah / the output changed to:
// 11
// 12
// 13

// Let's modify hte function then.

let add3 = function() {
 let counter3 = 0; // variable counter dimasukkan dalam function/ variable counter inserted into the function
 return ++counter3;
}

console.log(add3());
console.log(add3());
console.log(add3());

//output:
// 1
// 1
// 1

// That's not the output we expecting, so let's modify the function. Inner function is returned. 

let add4 = function() {
 let counter4 = 0;
 return function(){
  ++counter4;
 }
}

let a = add4();

console.log(a());
console.log(a());
console.log(a());

//output:
// undefined
// undefined
// undefined

// This is also not as expected. Let's change the functionn.

let add5 = function() {
 let counter5 = 0;
 return function(){   // outer function me-return inner function-nya  
  return ++counter5;  // innetr function me-return variabel counter
 }
}

let hasil = add5();

// inner function di return bukan di called, maka dia disimpan di dalam fungsi hasil dan bisa mengambil nilai counter, walaupun outer function (add) sudah tutup (closed). 

console.log(hasil());
console.log(hasil());

counter = 10; // kita berikan nilai pada variabel counter tetap tidak akan merubah counter, karena tetap menyimpan nilai counter sebelumnya ketika fungsi add5 dipanggil

console.log(hasil());

//output:
// 1
// 2
// 3

// The above function also can be written as below
// as Function Declaration

function counter6(){
  let count = 0;
  function accumulation(){
    return ++count;
  }
  return accumulation;
}
  
let result = counter6();  

console.log(result());
console.log(result());
console.log(result());

//output:
// 1
// 2
// 3

let add7 = function() {
 let counter7 = 0;
 return function(){
  return ++counter;
 }
}

// if we forget to add: let result = add7();
// this what will be happened:

console.log(add7());
console.log(add7());
console.log(add7());

//output:
// ƒ (){
//  return ++counter;
// }
// ƒ (){
//  return ++counter;
// }
// ƒ (){
//   return ++counter;
// }


// Hence, we can use IIFE (Immediately Invoked Function Expression):

let add8 = (function() {
 let counter8 = 0;
 return function(){
  return ++counter8; // ini sama dengan counter = counter + 1
 }
})();

console.log(add8());
console.log(add8());
console.log(add8());
console.log(add8());
console.log(add8());

//output:
// 1
// 2
// 3
// 4
// 5

// Let's test the function

let add9 = (function() {
 let counter9 = 0;
 return function(){
  return ++counter9;
 }
})();

// walaupun ditambah variabel counter9 di luar fungsi, tetap tidak akan berubah outputnya.
// try to change the variable counter9 = 100, it won't change the output.

let counter9 = 100;

console.log(add9());
console.log(add9());

counter9 = 30; // again change the value of counter

console.log(add9());
console.log(add9());
console.log(add9());

//output tetap tidak terpengaruh / the output will still be OK :
// 1
// 2
// 3
// 4
// 5

// Perfect!
