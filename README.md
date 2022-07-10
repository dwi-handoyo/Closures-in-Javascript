# Closures-in-Javascript

<b>Definition</b>

#1

A closure is a function that references variables in the outer scope from its inner scope. The inner function need variable in its parent scope (lexical scope). 

Inner function yang membutuhkan variable di parent scope-nya (lexical scope) disebut closure.

#2

Closures = function having access to parent scope(1) + even after parent function been closed(2)

This to show lexical scope which is very important in closures (1) and the closure preserve the variable after parent function is closed (2).

<b>Typical Format</b>

#1 Function Expression without IIFE (Immediately Invoke Function Expression)

      let add = function() {

         let counter = 0;
         return function(){     
         return ++counter;  
         }

      }
  
  let result = add();

  console.log(result());
  
  console.log(result());
  
  console.log(result());  

#2 Function Expression with IIFE (Immediately Invoke Function Expression)

   let add = (function() {

      let counter = 0;
 
      return function(){     
 
         return ++counter;  
 
     }

  })();

  console.log(add());
  
  console.log(add());
  
  console.log(add());

#3 Function Declaration

   function counter(){

      let count = 0;
      
      function accumulation(){
      
         return ++count;
         
      }
      
      return accumulation;
   
   }
  
   let result = counter();  

   console.log(result());

   console.log(result());

   console.log(result());





